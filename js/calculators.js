import { EXERCISE_PATTERNS } from './database.js';

/**
 * Calculates Body Mass Index (BMI).
 * Formula: weight (kg) / [height (m)]^2
 */
export function calculateBMI(weight, height) {
  const w = parseFloat(weight);
  const h = parseFloat(height);
  if (!w || !h || w <= 0 || h <= 0) return 0;
  const heightMeters = h / 100;
  return parseFloat((w / (heightMeters * heightMeters)).toFixed(1));
}

/**
 * Categorizes BMI according to WHO standards.
 */
export function getBMICategory(bmi) {
  const val = parseFloat(bmi);
  if (!val || val <= 0) return { text: "Sin datos", color: "var(--text-muted)" };
  if (val < 18.5) return { text: "Bajo peso", color: "#38bdf8" };
  if (val < 25) return { text: "Peso Normal", color: "#22c55e" };
  if (val < 30) return { text: "Sobrepeso", color: "#eab308" };
  return { text: "Obesidad", color: "#ef4444" };
}

/**
 * Calculates Ideal Weight using the Lorentz formula.
 * Men: (height - 100) - ((height - 150) / 4)
 * Women: (height - 100) - ((height - 150) / 2.5)
 */
export function calculateIdealWeight(height, gender) {
  const h = parseFloat(height);
  if (!h || h < 100) return 0;
  if (gender === 'female') {
    return Math.round((h - 100) - ((h - 150) / 2.5));
  }
  return Math.round((h - 100) - ((h - 150) / 4));
}

/**
 * Calculates recommended daily water intake (ml).
 * Formula: 35ml per kg of body weight.
 */
export function calculateWaterTarget(weight) {
  const w = parseFloat(weight);
  if (!w || w <= 0) return 0;
  return Math.round(w * 35);
}

/**
 * Suggests an initial fitness goal based on BMI.
 */
export function getGoalRecommendation(weight, height) {
  const bmi = calculateBMI(weight, height);
  if (bmi <= 0) return { goal: null, text: "" };
  if (bmi >= 25) {
    return {
      goal: 'lose-weight',
      text: `Sugerencia: Tu IMC es ${bmi} (Sobrepeso/Obesidad). Te recomendamos <strong>Perder Peso</strong>.`
    };
  } else if (bmi < 18.5) {
    return {
      goal: 'build-muscle',
      text: `Sugerencia: Tu IMC es ${bmi} (Bajo peso). Te recomendamos <strong>Ganar Músculo</strong>.`
    };
  } else {
    return {
      goal: 'get-fit',
      text: `Sugerencia: Tu IMC es ${bmi} (Peso Saludable). Te recomendamos <strong>Estar en Forma</strong>.`
    };
  }
}

/**
 * Matches an exercise name to a known biomechanical pattern.
 */
export function getExercisePattern(exerciseName) {
  if (!exerciseName) return { ...EXERCISE_PATTERNS.SQUAT };
  const name = exerciseName.toLowerCase();
  
  let pattern = null;
  if (name.includes('sentadilla') || name.includes('squat')) pattern = { ...EXERCISE_PATTERNS.SQUAT };
  else if (name.includes('peso muerto') || name.includes('deadlift') || name.includes('puente') || name.includes('superman')) pattern = { ...EXERCISE_PATTERNS.HINGE };
  else if (name.includes('hombro') || name.includes('militar') || name.includes('press militar') || name.includes('pike')) pattern = { ...EXERCISE_PATTERNS.SHOULDER };
  else if (name.includes('flexion') || name.includes('pushup') || name.includes('press') || name.includes('fondo') || name.includes('pecho')) {
    pattern = { ...EXERCISE_PATTERNS.PUSH };
    if (name.includes('banca') || name.includes('bench')) {
      pattern.mediaUrl = 'assets/exercises/bench.gif';
    }
  }
  else if (name.includes('remo') || name.includes('traccion') || name.includes('row') || name.includes('dominada')) pattern = { ...EXERCISE_PATTERNS.ROW };
  else if (name.includes('zancada') || name.includes('lunge') || name.includes('búlgara') || name.includes('bulgara')) pattern = { ...EXERCISE_PATTERNS.LUNGE };
  else if (name.includes('plancha') || name.includes('crunch') || name.includes('abdomen') || name.includes('core') || name.includes('elevación de pelvis') || name.includes('piernas') || name.includes('tijera')) pattern = { ...EXERCISE_PATTERNS.CORE };
  else if (name.includes('gemelo') || name.includes('talones') || name.includes('calves')) pattern = { ...EXERCISE_PATTERNS.CALVES };
  else if (name.includes('jumping') || name.includes('burpee') || name.includes('cuerda') || name.includes('escalador') || name.includes('boxing') || name.includes('hiit') || name.includes('cardio')) pattern = { ...EXERCISE_PATTERNS.CARDIO };
  
  if (pattern) return pattern;

  return {
    name: "Ejercicio General",
    primaryMuscles: "Cuerpo Completo & Acondicionamiento",
    secondaryMuscles: "Estabilizadores del Core",
    mediaUrl: "assets/exercises/squat.gif",
    execution: "Realizá el movimiento manteniendo el control durante toda la fase de bajada y subida, sintiendo la contracción del músculo trabajado.",
    postureTip: "Respirá de forma rítmica sin bloquear la respiración. Mantené la columna en posición neutra.",
    steps: [
      "1. Posición Inicial: Alineá tu cuerpo, acomodá los pies firmes y prepará el agarre con seguridad.",
      "2. Fase de Ejecución: Iniciá el movimiento controlando la velocidad, sintiendo el trabajo en los músculos objetivos.",
      "3. Fase de Regreso: Volvé a la posición inicial sin dejar caer el peso de golpe."
    ],
    breathing: "Inhalá durante la fase fácil o de descenso; exhalá con fuerza al hacer el esfuerzo principal.",
    commonMistakes: [
      "Usar demasiado impulso o balancear el cuerpo.",
      "Perder la postura adecuada por apresurarse.",
      "Hacer movimientos incompletos sin rango completo de movimiento."
    ],
    equipment: {
      dumbbells: "Podés sumar peso con mancuernas para mayor intensidad.",
      barbell: "Podés utilizar barra si buscás sobrecarga progresiva.",
      kettlebell: "Podés utilizar pesa rusa manteniendo el centro de gravedad alineado.",
      bodyweight: "Enfocate en la cadencia y tiempo bajo tensión con tu peso corporal."
    },
    svg: EXERCISE_PATTERNS.SQUAT.svg
  };
}

/**
 * Returns tailored equipment advice for an exercise pattern given available equipment.
 */
export function getEquipmentAdvice(pattern, userEquipment) {
  if (!pattern || !pattern.equipment) return "";
  const equip = Array.isArray(userEquipment) ? userEquipment : [];
  let advices = [];

  if (equip.includes('dumbbells') && pattern.equipment.dumbbells) {
    advices.push(`🏋️ <strong>Mancuernas:</strong> ${pattern.equipment.dumbbells}`);
  }
  if (equip.includes('barbell') && pattern.equipment.barbell) {
    advices.push(`🏋️‍♂️ <strong>Barra:</strong> ${pattern.equipment.barbell}`);
  }
  if (equip.includes('kettlebell') && pattern.equipment.kettlebell) {
    advices.push(`🔔 <strong>Pesa Rusa:</strong> ${pattern.equipment.kettlebell}`);
  }
  
  if (advices.length === 0) {
    return pattern.equipment.bodyweight 
      ? `🤸 <strong>Peso Corporal:</strong> ${pattern.equipment.bodyweight}` 
      : "Realizá el ejercicio con peso corporal y control estricto.";
  }

  return advices.join('<br>');
}

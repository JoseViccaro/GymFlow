// GymFlow - Core Application Logic

// 1. Routine Database
const WORKOUT_DATABASE = {
  'lose-weight': {
    1: {
      name: "Fase 1: Acondicionamiento & Resistencia",
      description: "Preparación muscular y cardiovascular. Foco en técnica y control.",
      days: [
        {
          name: "Día 1: Cardio-Fuerza General",
          exercises: [
            { name: "Sentadillas con peso corporal", sets: 3, reps: "15", rest: 60, target: "Cuádriceps y Glúteos" },
            { name: "Flexiones de brazos (de rodillas si es necesario)", sets: 3, reps: "10", rest: 60, target: "Pectoral y Tríceps" },
            { name: "Zancadas alternas", sets: 3, reps: "12 por lado", rest: 60, target: "Piernas y Core" },
            { name: "Plancha clásica", sets: 3, reps: "30 seg", rest: 45, target: "Abdomen" },
            { name: "Jumping Jacks (Salto de tijera)", sets: 3, reps: "45 seg", rest: 45, target: "Cardio" }
          ]
        },
        {
          name: "Día 2: Tren Superior & Core",
          exercises: [
            { name: "Remo con mochila o mancuernas", sets: 3, reps: "12", rest: 60, target: "Espalda" },
            { name: "Press de hombros con mancuernas/botellas", sets: 3, reps: "12", rest: 60, target: "Hombros" },
            { name: "Superman (extensión lumbar)", sets: 3, reps: "15", rest: 45, target: "Espalda baja" },
            { name: "Bicycle Crunches (abdominales bicicleta)", sets: 3, reps: "20", rest: 45, target: "Oblicuos" },
            { name: "Burpees adaptados (sin flexión)", sets: 3, reps: "10", rest: 60, target: "Cardio" }
          ]
        },
        {
          name: "Día 3: Tren Inferior & HIIT",
          exercises: [
            { name: "Puentes de glúteo", sets: 3, reps: "20", rest: 45, target: "Isquiotibiales y Glúteos" },
            { name: "Sentadilla estática contra la pared", sets: 3, reps: "30 seg", rest: 45, target: "Piernas" },
            { name: "Zancadas laterales", sets: 3, reps: "10 por lado", rest: 60, target: "Glúteo medio" },
            { name: "Escaladores (Mountain Climbers)", sets: 3, reps: "40 seg", rest: 45, target: "Core y Cardio" },
            { name: "Saltar la cuerda (o simulación)", sets: 3, reps: "1 min", rest: 60, target: "Cardio" }
          ]
        }
      ]
    },
    2: {
      name: "Fase 2: Tonificación & Fuerza Progresiva",
      description: "Incremento de intensidad. Buscamos quemar grasa y preservar músculo.",
      days: [
        {
          name: "Día 1: Empuje (Tren Inferior & Superior)",
          exercises: [
            { name: "Sentadilla Goblet (con peso)", sets: 4, reps: "12", rest: 60, target: "Cuádriceps" },
            { name: "Flexiones de brazos estrictas", sets: 4, reps: "10-12", rest: 60, target: "Pecho" },
            { name: "Zancadas caminando con peso", sets: 3, reps: "12 pasos", rest: 60, target: "Piernas" },
            { name: "Fondos de tríceps en silla", sets: 3, reps: "12", rest: 60, target: "Tríceps" },
            { name: "Burpees completos", sets: 3, reps: "10", rest: 60, target: "Cardio" }
          ]
        },
        {
          name: "Día 2: Tracción & Core",
          exercises: [
            { name: "Remo a una mano con peso", sets: 4, reps: "10 por lado", rest: 60, target: "Dorsales" },
            { name: "Vuelos laterales con botellas/mancuernas", sets: 3, reps: "15", rest: 60, target: "Hombro lateral" },
            { name: "Crunches invertidos (elevación de pelvis)", sets: 3, reps: "15", rest: 45, target: "Abdomen bajo" },
            { name: "Plancha lateral", sets: 3, reps: "30 seg por lado", rest: 45, target: "Oblicuos" },
            { name: "Escaladores cruzados", sets: 3, reps: "45 seg", rest: 45, target: "Cardio y Core" }
          ]
        },
        {
          name: "Día 3: Fuerza Completa & Resistencia",
          exercises: [
            { name: "Peso muerto rumano con peso", sets: 4, reps: "12", rest: 60, target: "Isquios y Glúteos" },
            { name: "Pike Pushups (flexiones pino adaptadas)", sets: 3, reps: "8-10", rest: 60, target: "Hombros" },
            { name: "Sentadilla búlgara (una pierna en silla)", sets: 3, reps: "10 por pierna", rest: 60, target: "Pierna aislada" },
            { name: "Plancha activa (subir y bajar codos)", sets: 3, reps: "12", rest: 60, target: "Core e Hombros" },
            { name: "Jumping Jacks rápidos", sets: 4, reps: "1 min", rest: 45, target: "Cardio" }
          ]
        }
      ]
    },
    3: {
      name: "Fase 3: Definición & Densidad Metabólica",
      description: "Tiempos cortos de descanso y alta densidad. Máximo gasto calórico.",
      days: [
        {
          name: "Día 1: Circuito Acelerador Metabólico",
          exercises: [
            { name: "Sentadilla con salto (Squat Jump)", sets: 4, reps: "15", rest: 45, target: "Potencia Piernas" },
            { name: "Flexiones de brazos con toque de hombros", sets: 4, reps: "12", rest: 45, target: "Pecho y Core" },
            { name: "Zancadas explosivas con salto", sets: 3, reps: "10 por lado", rest: 45, target: "Piernas" },
            { name: "Plancha Spider-man", sets: 3, reps: "12 por lado", rest: 45, target: "Oblicuos" },
            { name: "Burpees con salto alto", sets: 4, reps: "10", rest: 45, target: "Cardio" }
          ]
        },
        {
          name: "Día 2: Tren Superior Completo & Core Activo",
          exercises: [
            { name: "Remo con peso + Press de hombro combo", sets: 4, reps: "10", rest: 45, target: "Espalda e Hombros" },
            { name: "Flexiones diamante (manos juntas)", sets: 3, reps: "8-10", rest: 45, target: "Tríceps y Pecho" },
            { name: "Elevación de piernas acostado", sets: 4, reps: "15", rest: 30, target: "Abdomen bajo" },
            { name: "Plancha Hollow Body", sets: 3, reps: "40 seg", rest: 45, target: "Core profundo" },
            { name: "Shadow Boxing (Golpes al aire rápidos)", sets: 3, reps: "1.5 min", rest: 30, target: "Acondicionamiento" }
          ]
        },
        {
          name: "Día 3: Desafío de Resistencia Total",
          exercises: [
            { name: "Sentadilla isométrica profunda", sets: 3, reps: "45 seg", rest: 30, target: "Fuerza Estática" },
            { name: "Flexiones arqueras (peso a un lado)", sets: 3, reps: "8 por lado", rest: 45, target: "Pecho e Hombros" },
            { name: "Zancada inversa con elevación de rodilla", sets: 3, reps: "15 por lado", rest: 45, target: "Glúteos y Equilibrio" },
            { name: "Abdominales en V (V-ups)", sets: 3, reps: "12", rest: 45, target: "Core completo" },
            { name: "Skater Jumps (saltos laterales de patinador)", sets: 4, reps: "1 min", rest: 30, target: "Cardio Lateral" }
          ]
        }
      ]
    }
  },
  'build-muscle': {
    1: {
      name: "Fase 1: Preparación Hipertrofia & Conexión Mente-Músculo",
      description: "Enfoque en tensión mecánica y contracción muscular controlada.",
      days: [
        {
          name: "Día 1: Torso (Empuje y Tracción)",
          exercises: [
            { name: "Remo con peso corporal o mancuernas", sets: 3, reps: "10 (tempo 3-0-1)", rest: 90, target: "Dorsales" },
            { name: "Flexiones en el suelo con pausa abajo", sets: 3, reps: "10 (pausa 2 seg)", rest: 90, target: "Pectoral" },
            { name: "Press militar con mancuernas/peso", sets: 3, reps: "10", rest: 90, target: "Hombros" },
            { name: "Flexión de bíceps con mochila/peso", sets: 3, reps: "12", rest: 60, target: "Bíceps" },
            { name: "Plancha clásico con retracción escapular", sets: 3, reps: "45 seg", rest: 60, target: "Core" }
          ]
        },
        {
          name: "Día 2: Piernas & Core",
          exercises: [
            { name: "Sentadilla profunda con peso", sets: 3, reps: "12", rest: 90, target: "Cuádriceps" },
            { name: "Peso muerto rumano con mochila pesada", sets: 3, reps: "12", rest: 90, target: "Isquiotibiales" },
            { name: "Zancadas estáticas con peso", sets: 3, reps: "10 por lado", rest: 90, target: "Glúteos" },
            { name: "Elevación de talones de pie (gemelos)", sets: 4, reps: "20 (pausa arriba)", rest: 45, target: "Gemelos" },
            { name: "Crunch abdominal clásico controlado", sets: 3, reps: "15", rest: 60, target: "Recto abdominal" }
          ]
        },
        {
          name: "Día 3: Cuerpo Completo (Full Body)",
          exercises: [
            { name: "Sentadilla Goblet pesada", sets: 3, reps: "12", rest: 90, target: "Tren inferior" },
            { name: "Flexiones declinadas (pies elevados)", sets: 3, reps: "10", rest: 90, target: "Pectoral superior" },
            { name: "Paseo del granjero con garrafas de agua", sets: 3, reps: "40 metros", rest: 60, target: "Agarre y Hombros" },
            { name: "Extensiones de tríceps tras nuca", sets: 3, reps: "12", rest: 60, target: "Tríceps" },
            { name: "Elevación de piernas tumbado", sets: 3, reps: "12", rest: 60, target: "Abdomen" }
          ]
        }
      ]
    },
    2: {
      name: "Fase 2: Hipertrofia Clásica (Sobrecarga Progresiva)",
      description: "Incrementamos peso y series. Buscamos la máxima fatiga muscular efectiva.",
      days: [
        {
          name: "Día 1: Empuje (Pectoral, Hombros, Tríceps)",
          exercises: [
            { name: "Flexiones con peso (mochila cargada)", sets: 4, reps: "8-10", rest: 90, target: "Pecho" },
            { name: "Press militar unilateral de pie", sets: 4, reps: "10 por lado", rest: 90, target: "Hombro frontal" },
            { name: "Aperturas de pecho con botellas/mancuernas", sets: 3, reps: "12", rest: 90, target: "Aislamiento Pectoral" },
            { name: "Fondos de tríceps con peso adicional", sets: 3, reps: "10", rest: 60, target: "Tríceps" },
            { name: "Press de hombros sentado (mancuernas)", sets: 3, reps: "12", rest: 90, target: "Hombros" }
          ]
        },
        {
          name: "Día 2: Tracción (Espalda, Bíceps, Core)",
          exercises: [
            { name: "Remo pesado con mochila/mancuerna", sets: 4, reps: "10", rest: 90, target: "Espalda media" },
            { name: "Remo invertido bajo mesa o barra", sets: 4, reps: "8-10", rest: 90, target: "Espalda alta" },
            { name: "Pájaros (vuelos posteriores para hombro)", sets: 3, reps: "15", rest: 60, target: "Hombro posterior" },
            { name: "Curl de bíceps concentrado", sets: 3, reps: "12 por brazo", rest: 60, target: "Bíceps" },
            { name: "Plancha RKC (tensión máxima)", sets: 3, reps: "20 seg", rest: 45, target: "Core" }
          ]
        },
        {
          name: "Día 3: Piernas Pesadas",
          exercises: [
            { name: "Sentadilla búlgara pesada", sets: 4, reps: "10 por lado", rest: 90, target: "Cuádriceps" },
            { name: "Peso muerto rumano pesado", sets: 4, reps: "10", rest: 90, target: "Femorales" },
            { name: "Sentadillas profundas tempo 4-0-1", sets: 3, reps: "10", rest: 90, target: "Pierna general" },
            { name: "Zancadas estáticas unilaterales", sets: 3, reps: "12 por pierna", rest: 90, target: "Glúteos" },
            { name: "Elevación de talones sentado con peso", sets: 4, reps: "25", rest: 45, target: "Sóleo/Gemelos" }
          ]
        }
      ]
    },
    3: {
      name: "Fase 3: Estrés Metabólico & Volumen Avanzado",
      description: "Drop-sets mecánicos y pausas cortas. Máxima congestión muscular.",
      days: [
        {
          name: "Día 1: Torso Gigante (Superseries)",
          exercises: [
            { name: "SS: Remo con peso + Flexiones estrictas", sets: 4, reps: "10 + Al fallo", rest: 90, target: "Pecho y Espalda" },
            { name: "SS: Press militar + Elevación lateral", sets: 3, reps: "10 + 12", rest: 90, target: "Hombro completo" },
            { name: "SS: Curl bíceps + Extensión tríceps", sets: 3, reps: "12 + 12", rest: 60, target: "Brazos" },
            { name: "Plancha Spider-man controlada", sets: 3, reps: "12 por lado", rest: 45, target: "Core" }
          ]
        },
        {
          name: "Día 2: Piernas & Potencia",
          exercises: [
            { name: "Zancadas explosivas con salto", sets: 4, reps: "15 por pierna", rest: 60, target: "Glúteos y Potencia" },
            { name: "Sentadilla Goblet con pulso abajo", sets: 4, reps: "12 (1.5 repeticiones)", rest: 90, target: "Cuádriceps" },
            { name: "Peso muerto rumano unilateral (mancuerna)", sets: 3, reps: "12 por lado", rest: 90, target: "Isquiotibiales" },
            { name: "Gemelos de pie a una pierna", sets: 4, reps: "15 por pierna", rest: 45, target: "Gemelos" },
            { name: "Abdominales del escalador lentos", sets: 3, reps: "1 min", rest: 45, target: "Abdomen" }
          ]
        },
        {
          name: "Día 3: Destrucción Full Body (Volumen)",
          exercises: [
            { name: "Sentadillas profundas sin peso (100 totales)", sets: 1, reps: "100 (mínimo de descansos)", rest: 0, target: "Resistencia Muscular" },
            { name: "Flexiones de brazos tempo 3-2-1", sets: 4, reps: "8-10", rest: 60, target: "Pectoral" },
            { name: "Remo a una mano en plancha alta", sets: 3, reps: "10 por lado", rest: 60, target: "Espalda e Core" },
            { name: "Crunches bicicleta explosivos", sets: 4, reps: "30", rest: 30, target: "Abdomen y Oblicuos" }
          ]
        }
      ]
    }
  },
  'get-fit': {
    1: {
      name: "Fase 1: Estabilización, Postura & Core",
      description: "Foco en balance muscular, movilidad articular y fortalecimiento abdominal.",
      days: [
        {
          name: "Día 1: Movilidad & Fuerza Base",
          exercises: [
            { name: "Sentadillas libres con brazos arriba", sets: 3, reps: "12", rest: 60, target: "Pierna y Espalda alta" },
            { name: "Retracciones escapulares boca abajo", sets: 3, reps: "15", rest: 45, target: "Hombros y Postura" },
            { name: "Flexiones inclinadas (manos en pared/mesa)", sets: 3, reps: "12", rest: 60, target: "Pecho" },
            { name: "Plancha clásica de antebrazos", sets: 3, reps: "45 seg", rest: 60, target: "Core" },
            { name: "Puentes de glúteo sosteniendo 2 seg arriba", sets: 3, reps: "15", rest: 45, target: "Cadena posterior" }
          ]
        },
        {
          name: "Día 2: Flexibilidad Activa & Tonificación",
          exercises: [
            { name: "Zancada invertida con giro de torso", sets: 3, reps: "10 por pierna", rest: 60, target: "Piernas y Core" },
            { name: "Pájaros con peso liviano (botellitas)", sets: 3, reps: "15", rest: 60, target: "Postura hombros" },
            { name: "Abdominales Dead Bug (bicho muerto)", sets: 3, reps: "12 por lado", rest: 45, target: "Estabilidad Core" },
            { name: "Rotaciones torácicas cuadrúpedas", sets: 3, reps: "10 por lado", rest: 45, target: "Movilidad columna" },
            { name: "Jumping Jacks de bajo impacto", sets: 3, reps: "1 min", rest: 45, target: "Movimiento General" }
          ]
        },
        {
          name: "Día 3: Resistencia Core & Cardiovascular",
          exercises: [
            { name: "Sentadilla estática de pared", sets: 3, reps: "30 seg", rest: 45, target: "Resistencia cuadrúceps" },
            { name: "Supermans alternos cuadrúpedos", sets: 3, reps: "12 por lado", rest: 45, target: "Espalda y Core" },
            { name: "Flexiones de rodillas controladas", sets: 3, reps: "10", rest: 60, target: "Pectoral" },
            { name: "Plancha lateral corta (con rodillas)", sets: 3, reps: "30 seg por lado", rest: 45, target: "Oblicuos" },
            { name: "Caminata rápida en el sitio con rodillas altas", sets: 3, reps: "1.5 min", rest: 45, target: "Cardio ligero" }
          ]
        }
      ]
    },
    2: {
      name: "Fase 2: Coordinación & Fuerza Funcional",
      description: "Ejercicios dinámicos multiarticulares para mejorar agilidad y fuerza de sostén.",
      days: [
        {
          name: "Día 1: Entrenamiento Funcional Torso-Pierna",
          exercises: [
            { name: "Zancadas cruzadas hacia atrás (cossack)", sets: 3, reps: "12 por lado", rest: 60, target: "Cadera y Glúteo" },
            { name: "Flexiones con toque de hombros en plancha", sets: 3, reps: "10", rest: 60, target: "Pectoral y Estabilidad" },
            { name: "Puentes de glúteo a una sola pierna", sets: 3, reps: "10 por pierna", rest: 60, target: "Cadena posterior" },
            { name: "Paseo de oso en cuadrupedia (caminar)", sets: 3, reps: "10 pasos adelante/atrás", rest: 60, target: "Core completo" },
            { name: "Burpees adaptados (apoyo firme sin salto)", sets: 3, reps: "10", rest: 60, target: "Cardio" }
          ]
        },
        {
          name: "Día 2: Tonificación e Hombros/Core",
          exercises: [
            { name: "Pike Pushups en rodillas (hombro)", sets: 3, reps: "10", rest: 60, target: "Hombros" },
            { name: "Remo con mochila peso moderado", sets: 4, reps: "12", rest: 60, target: "Espalda" },
            { name: "Plancha baja con balanceo adelante/atrás", sets: 3, reps: "45 seg", rest: 45, target: "Core" },
            { name: "Crunches bicicleta a ritmo lento", sets: 3, reps: "20", rest: 45, target: "Abdomen" },
            { name: "Saltos de estrella", sets: 3, reps: "45 seg", rest: 60, target: "Agilidad" }
          ]
        },
        {
          name: "Día 3: Circuito Funcional Full Body",
          exercises: [
            { name: "Sentadilla búlgara", sets: 3, reps: "10 por pierna", rest: 60, target: "Piernas" },
            { name: "Remo a una mano con mancuerna", sets: 3, reps: "12 por lado", rest: 60, target: "Espalda" },
            { name: "Plancha Spider-man lenta", sets: 3, reps: "10 por lado", rest: 60, target: "Oblicuos" },
            { name: "Escaladores alternos rápidos", sets: 3, reps: "40 seg", rest: 45, target: "Cardio y Core" },
            { name: "Skipping alto en el lugar", sets: 4, reps: "45 seg", rest: 45, target: "Cardio" }
          ]
        }
      ]
    },
    3: {
      name: "Fase 3: Acondicionamiento Atlético & Definición",
      description: "Máxima movilidad, alta intensidad metabólica y quema de calorías.",
      days: [
        {
          name: "Día 1: Circuito Atlético",
          exercises: [
            { name: "Sentadillas profundas explosivas", sets: 4, reps: "15", rest: 45, target: "Pierna reactiva" },
            { name: "Flexiones arqueras asistidas (rodillas)", sets: 3, reps: "8 por lado", rest: 60, target: "Pectoral" },
            { name: "Zancadas laterales rápidas", sets: 3, reps: "12 por lado", rest: 45, target: "Glúteos" },
            { name: "Plancha en Hollow Body clásico", sets: 3, reps: "45 seg", rest: 45, target: "Core profundo" },
            { name: "Burpees completos con salto", sets: 4, reps: "10", rest: 60, target: "Resistencia" }
          ]
        },
        {
          name: "Día 2: Definición y Fuerza Estabilizadora",
          exercises: [
            { name: "Remo pesado con garrafa + giro de torso", sets: 3, reps: "12 por lado", rest: 60, target: "Espalda y Rotadores" },
            { name: "Flexiones diamante asistidas", sets: 3, reps: "10", rest: 60, target: "Tríceps" },
            { name: "Elevación de piernas + empuje de cadera", sets: 3, reps: "12", rest: 45, target: "Abdomen inferior" },
            { name: "Plancha lateral activa (bajar/subir cadera)", sets: 3, reps: "12 por lado", rest: 45, target: "Oblicuos" },
            { name: "Saltos cruzados (Skipping cruzado)", sets: 3, reps: "1 min", rest: 45, target: "Coordinación" }
          ]
        },
        {
          name: "Día 3: Desafío de Salud Funcional",
          exercises: [
            { name: "Sentadilla búlgara isométrica (sostén)", sets: 3, reps: "25 seg por lado", rest: 45, target: "Piernas" },
            { name: "Pike Pushups estrictas (pino adaptado)", sets: 3, reps: "10", rest: 60, target: "Hombros e Hilo escapular" },
            { name: "Peso muerto rumano unilateral sin peso", sets: 3, reps: "15 por pierna (equilibrio)", rest: 45, target: "Isquios y Balance" },
            { name: "Abdominales tijeras horizontales", sets: 3, reps: "40 seg", rest: 45, target: "Core" },
            { name: "Mountain Climbers cruzados veloces", sets: 4, reps: "1 min", rest: 45, target: "Cardio Metabólico" }
          ]
        }
      ]
    }
  }
};

// 2. Global State Management
let State = {
  profiles: [],
  activeProfileId: null
};

// Load State from LocalStorage
function loadState() {
  try {
    const saved = localStorage.getItem('gymflow_state');
    if (saved) {
      State = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading state from localStorage:', e);
  }
}

// Save State to LocalStorage
function saveState() {
  try {
    localStorage.setItem('gymflow_state', JSON.stringify(State));
  } catch (e) {
    console.error('Error saving state to localStorage:', e);
  }
}

// Get Active Profile
function getActiveProfile() {
  if (!State.activeProfileId) return null;
  return State.profiles.find(p => p.id === State.activeProfileId) || null;
}

// 3. Calculator Utilities
function calculateBMI(weight, height) {
  const heightMeters = height / 100;
  return (weight / (heightMeters * heightMeters)).toFixed(1);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return { text: 'Bajo peso', color: '#38bdf8' }; // Azul
  if (bmi < 25) return { text: 'Normal', color: '#4ade80' }; // Verde
  if (bmi < 30) return { text: 'Sobrepeso', color: '#fbbf24' }; // Amarillo
  return { text: 'Obesidad', color: '#f87171' }; // Rojo
}

function calculateWaterTarget(weight) {
  return Math.round(weight * 35); // 35 ml per kg
}

function calculateIdealWeight(height, gender) {
  if (!height || isNaN(height)) return 0;
  if (height < 150) return Math.round(height - 100);
  if (gender === 'female') {
    return Math.round(height - 100 - ((height - 150) / 2));
  } else {
    return Math.round(height - 100 - ((height - 150) / 4));
  }
}

function getGoalRecommendation(weight, height) {
  if (!weight || !height) return { text: 'Ingresá peso y estatura para recibir una recomendación', goal: '' };
  const bmi = calculateBMI(weight, height);
  if (bmi < 18.5) {
    return { text: 'Recomendación: Ganar Músculo. Tu IMC está bajo.', goal: 'build-muscle' };
  } else if (bmi >= 25) {
    return { text: 'Recomendación: Perder Peso. Tu IMC indica sobrepeso u obesidad.', goal: 'lose-weight' };
  } else {
    return { text: 'Recomendación: Estar en Forma. Tu IMC es saludable.', goal: 'get-fit' };
  }
}

// 3.1 Exercise Guides & Pattern Library
const EXERCISE_PATTERNS = {
  SQUAT: {
    name: "Sentadilla (Piernas)",
    execution: "Parate con los pies al ancho de hombros. Flexioná la cadera y rodillas bajando como si te fueras a sentar, manteniendo la espalda derecha y el pecho alto. Volvé a subir empujando con fuerza desde los talones.",
    postureTip: "Mantené las rodillas alineadas con las puntas de tus pies; no dejes que venzan hacia adentro (valgo).",
    equipment: {
      dumbbells: "Sostené una mancuerna en cada mano sobre tus hombros (Front Squat) o pegada al pecho (Goblet Squat) para mayor resistencia.",
      barbell: "Colocá la barra sobre tus trapecios (no sobre el cuello), retraé los omóplatos firmemente y realizá la sentadilla trasera clásica.",
      kettlebell: "Sostené tu pesa rusa pegada al pecho con ambas manos por los cuernos (Goblet Squat) manteniendo la verticalidad.",
      bodyweight: "Estirá los brazos hacia adelante para contrapeso y realizá la flexión profunda controlando la bajada."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <g class="anim-squat-group">
        <circle cx="50" cy="20" r="5" fill="var(--text-primary)" class="body-part squat-head" />
        <line x1="50" y1="25" x2="50" y2="50" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="body-part squat-torso" />
        <line x1="50" y1="30" x2="65" y2="30" stroke="var(--text-primary)" stroke-width="3" stroke-linecap="round" class="body-part squat-arms" />
        <line x1="50" y1="50" x2="62" y2="65" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="body-part squat-thigh" />
        <line x1="62" y1="65" x2="50" y2="85" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="body-part squat-shin" />
      </g>
      <path d="M25 35 L25 65 M20 60 L25 65 L30 60" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" class="anim-arrow-v" />
    </svg>`
  },
  PUSH: {
    name: "Empuje / Pecho",
    execution: "Colocá las manos un poco más anchas que los hombros. Bajá todo el cuerpo en bloque manteniendo los codos en diagonal (45 grados respecto al cuerpo) hasta rozar el suelo con el pecho, luego empujá firmemente.",
    postureTip: "Mantené el abdomen y los glúteos contraídos para evitar que la pelvis caiga y arquee tu zona lumbar.",
    equipment: {
      dumbbells: "Acostate boca arriba en el suelo y realizá Press de Pecho (Floor Press) subiendo y bajando las mancuernas de forma vertical.",
      barbell: "Hacé Press de Pecho en el piso (Floor Press) con barra: bajá con control hasta apoyar suavemente tus tríceps en el piso y empujá.",
      kettlebell: "Hacé Floor Press a un brazo con la pesa rusa, manteniendo la muñeca recta y el codo pegado al cuerpo.",
      bodyweight: "Si las flexiones completas son difíciles, apoyá las rodillas en el suelo o usá una superficie elevada (sofá, mesa)."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <g class="anim-push-group">
        <circle cx="75" cy="50" r="5" fill="var(--text-primary)" class="body-part push-head" />
        <line x1="70" y1="50" x2="40" y2="60" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="body-part push-body" />
        <line x1="40" y1="60" x2="25" y2="85" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="body-part push-legs" />
        <line x1="65" y1="53" x2="65" y2="70" stroke="var(--text-primary)" stroke-width="3.5" stroke-linecap="round" class="body-part push-arm1" />
        <line x1="65" y1="70" x2="72" y2="85" stroke="var(--text-primary)" stroke-width="3.5" stroke-linecap="round" class="body-part push-arm2" />
      </g>
      <path d="M85 45 L85 70 M80 65 L85 70 L90 65" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" class="anim-arrow-v" />
    </svg>`
  },
  ROW: {
    name: "Tracción / Espalda",
    execution: "Incliná el torso hacia adelante a 45 grados manteniendo la espalda completamente derecha. Llevá el peso hacia tu cadera flexionando los codos y contrayendo la espalda alta.",
    postureTip: "No encorves la columna en ningún momento; la espalda debe quedar neutra y los hombros lejos de las orejas.",
    equipment: {
      dumbbells: "Realizá Remo a dos manos de manera controlada o remo alternado sosteniendo una mancuerna en cada mano.",
      barbell: "Hacé Remo con Barra (pronación o supinación) llevando la barra hacia el ombligo manteniendo el torso firme.",
      kettlebell: "Hacé Remo Unilateral apoyando la mano contraria sobre un banco o rodilla para estabilizarte.",
      bodyweight: "Podés hacer remo invertido colocándote debajo de una mesa resistente y tomándote del borde para traccionar tu cuerpo."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <g class="anim-row-group">
        <circle cx="40" cy="35" r="5" fill="var(--text-primary)" />
        <line x1="40" y1="40" x2="55" y2="55" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="row-torso" />
        <line x1="55" y1="55" x2="50" y2="85" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="45" y1="43" x2="45" y2="58" stroke="var(--text-primary)" stroke-width="3.5" stroke-linecap="round" class="row-arm1" />
        <line x1="45" y1="58" x2="40" y2="68" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round" class="row-arm2" />
        <circle cx="40" cy="68" r="4" fill="var(--accent)" class="row-weight" />
      </g>
      <path d="M25 45 L25 65 M20 50 L25 45 L30 50" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" class="anim-arrow-v-reverse" />
    </svg>`
  },
  LUNGE: {
    name: "Zancada / Estocada",
    execution: "Da un paso amplio hacia adelante (o atrás). Bajá de manera vertical hasta que la rodilla trasera quede a centímetros del suelo y ambas piernas formen un ángulo de 90 grados. Empujá con el pie delantero para volver.",
    postureTip: "La rodilla delantera no debe pasar excesivamente la punta del pie y debe apuntar hacia adelante.",
    equipment: {
      dumbbells: "Sostené una mancuerna en cada mano a los lados de tus muslos mientras hacés las zancadas.",
      barbell: "Colocá la barra detrás sobre los hombros (trapecios). Requiere excelente balance y fuerza en el core.",
      kettlebell: "Sostené la pesa rusa pegada al pecho con ambas manos.",
      bodyweight: "Colocá las manos en tus caderas para enfocarte puramente en el equilibrio y la profundidad."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <g class="anim-lunge-group">
        <circle cx="50" cy="20" r="5" fill="var(--text-primary)" />
        <line x1="50" y1="25" x2="50" y2="50" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="50" y1="50" x2="65" y2="60" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="lunge-front-thigh" />
        <line x1="65" y1="60" x2="65" y2="85" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="lunge-front-shin" />
        <line x1="50" y1="50" x2="35" y2="60" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="lunge-back-thigh" />
        <line x1="35" y1="60" x2="20" y2="75" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="lunge-back-shin" />
      </g>
      <path d="M80 35 L80 65 M75 60 L80 65 L85 60" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" class="anim-arrow-v" />
    </svg>`
  },
  CORE: {
    name: "Abdomen / Núcleo",
    execution: "Para planchas: cuerpo alineado, codos bajo hombros y pelvis neutra. Para abdominales: contraé la pared abdominal acercando las costillas a la pelvis, evitando tirar del cuello con tus manos.",
    postureTip: "Si sentís molestia en la zona lumbar en lugar del abdomen, detenete y corregí la postura.",
    equipment: {
      dumbbells: "Hacé planchas con remo alternado (Renegade Row) sosteniendo las mancuernas apoyadas en el suelo.",
      barbell: "Colocá discos en la barra y usala como rueda abdominal deslizándote de rodillas.",
      kettlebell: "Hacé giros rusos (Russian Twists) de lado a lado sosteniendo la pesa rusa cerca del torso.",
      bodyweight: "Mantené planchas tradicionales, Hollow Body o hacé abdominales bicicleta controlados."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <g class="anim-core-group">
        <circle cx="25" cy="55" r="5" fill="var(--text-primary)" />
        <line x1="30" y1="55" x2="60" y2="55" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="core-body" />
        <line x1="60" y1="55" x2="80" y2="75" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="32" y1="57" x2="32" y2="75" stroke="var(--text-primary)" stroke-width="3.5" stroke-linecap="round" />
      </g>
      <path d="M40 55 Q 45 48 50 55 T 60 55" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" class="core-wave" />
    </svg>`
  },
  SHOULDER: {
    name: "Hombros",
    execution: "Empujá el peso verticalmente hacia arriba por encima de tu cabeza extendiendo los brazos por completo, o elevá los brazos lateralmente hasta la altura de los hombros manteniendo una leve flexión de codo.",
    postureTip: "Apretá fuerte el abdomen y glúteos para evitar arquear la espalda baja al empujar el peso.",
    equipment: {
      dumbbells: "Hacé Press de Hombros (sentado o parado) o elevaciones laterales con mancuernas.",
      barbell: "Hacé Press Militar de pie, llevando la barra desde tus clavículas hacia el techo de forma estricta.",
      kettlebell: "Hacé Press Unilateral sosteniendo la pesa rusa en posición de rack (apoyada en el antebrazo y pecho).",
      bodyweight: "Hacé flexiones en pica (Pike Pushups) con las caderas elevadas hacia arriba para derivar carga al deltoides."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <g class="anim-shoulder-group">
        <circle cx="50" cy="25" r="5" fill="var(--text-primary)" />
        <line x1="50" y1="30" x2="50" y2="60" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="50" y1="60" x2="42" y2="85" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="50" y1="60" x2="58" y2="85" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="50" y1="35" x2="35" y2="35" stroke="var(--text-primary)" stroke-width="3.5" stroke-linecap="round" class="shoulder-arm-l" />
        <line x1="35" y1="35" x2="35" y2="15" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round" class="shoulder-forearm-l" />
        <line x1="50" y1="35" x2="65" y2="35" stroke="var(--text-primary)" stroke-width="3.5" stroke-linecap="round" class="shoulder-arm-r" />
        <line x1="65" y1="35" x2="65" y2="15" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round" class="shoulder-forearm-r" />
        <circle cx="35" cy="15" r="3.5" fill="var(--accent)" class="shoulder-weight-l" />
        <circle cx="65" cy="15" r="3.5" fill="var(--accent)" class="shoulder-weight-r" />
      </g>
      <path d="M80 35 L80 15 M75 20 L80 15 L85 20" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" class="anim-arrow-v-reverse" />
    </svg>`
  },
  ARMS: {
    name: "Brazos (Bíceps / Tríceps)",
    execution: "Para bíceps: flexioná el codo manteniendo el brazo fijo al costado del torso. Para tríceps: extendé el codo completamente empujando el peso (tras nuca o patada de tríceps).",
    postureTip: "No utilices la inercia del cuerpo para mover la carga; los codos deben actuar como bisagras fijas.",
    equipment: {
      dumbbells: "Hacé Curl de Bíceps alternado o extensiones tras nuca con una mancuerna.",
      barbell: "Hacé Curl de Bíceps con barra de pie con agarre supino (palmas hacia arriba).",
      kettlebell: "Tomá la pesa rusa por los cuernos del asa y hacé curl de bíceps, o extensiones tras nuca.",
      bodyweight: "Hacé fondos de tríceps en banco o silla, manteniendo la espalda pegada al soporte."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <g class="anim-arms-group">
        <circle cx="45" cy="25" r="5" fill="var(--text-primary)" />
        <line x1="45" y1="30" x2="45" y2="60" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="45" y1="60" x2="52" y2="85" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="45" y1="35" x2="45" y2="50" stroke="var(--text-primary)" stroke-width="3.5" stroke-linecap="round" />
        <line x1="45" y1="50" x2="58" y2="40" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round" class="arms-forearm" />
        <circle cx="58" cy="40" r="3.5" fill="var(--accent)" class="arms-weight" />
      </g>
      <path d="M75 55 A 15 15 0 0 0 70 35" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" class="anim-arrow-curve" />
    </svg>`
  },
  POSTERIOR: {
    name: "Cadena Posterior (Isquiotibiales / Glúteos)",
    execution: "Empujá la cadera hacia atrás flexionando levemente las rodillas (bisagra de cadera), sintiendo el estiramiento en isquiotibiales y glúteos. Para puentes: empujá la pelvis hacia el techo contrayendo los glúteos arriba.",
    postureTip: "Mantené la columna en una línea recta de la cabeza a la cola; no encorves la espalda alta.",
    equipment: {
      dumbbells: "Hacé Peso Muerto Rumano manteniendo las mancuernas pegadas a tus piernas al bajar.",
      barbell: "Realizá Peso Muerto Rumano bajando la barra lentamente hasta media espinilla empujando la cadera atrás.",
      kettlebell: "Realizá el clásico Swing de pesa rusa (balanceo de cadera explosivo) o Peso Muerto Rumano.",
      bodyweight: "Hacé puentes de glúteos a una sola pierna para desafiar la cadena posterior sin carga."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <g class="anim-posterior-group">
        <circle cx="40" cy="35" r="5" fill="var(--text-primary)" class="post-head" />
        <line x1="40" y1="40" x2="55" y2="55" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="post-torso" />
        <line x1="55" y1="55" x2="55" y2="85" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="43" y1="43" x2="43" y2="68" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round" class="post-arm" />
        <circle cx="43" cy="68" r="4" fill="var(--accent)" class="post-weight" />
      </g>
      <path d="M25 45 A 20 20 0 0 0 35 65" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" class="anim-arrow-curve" />
    </svg>`
  },
  CALVES: {
    name: "Gemelos",
    execution: "Ubicá las puntas de los pies en un escalón. Elevá los talones al máximo contrayendo los gemelos, sostené 1 segundo arriba y bajá lentamente estirando por debajo del nivel del escalón.",
    postureTip: "Hacé el rango completo de movimiento despacio, evitando rebotar de forma elástica.",
    equipment: {
      dumbbells: "Sostené una mancuerna en la mano del mismo lado de la pierna que trabaja.",
      barbell: "Hacé elevaciones de talones de pie con la barra sobre tus hombros.",
      kettlebell: "Sostené la pesa rusa al pecho o al costado.",
      bodyweight: "Hacé las elevaciones a una sola pierna para duplicar el esfuerzo corporal."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <line x1="15" y1="85" x2="85" y2="85" stroke="var(--border)" stroke-width="2" stroke-linecap="round" />
      <path d="M50 85 L85 85 L85 75 L50 75 Z" fill="var(--bg-panel-solid)" stroke="var(--border)" stroke-width="2" />
      <g class="anim-calves-group">
        <circle cx="45" cy="20" r="5" fill="var(--text-primary)" />
        <line x1="45" y1="25" x2="45" y2="55" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" />
        <line x1="45" y1="55" x2="42" y2="78" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" class="calves-leg" />
        <line x1="42" y1="78" x2="55" y2="78" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" class="calves-foot" />
      </g>
      <path d="M25 78 L25 65 M20 70 L25 65 L30 70" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" class="anim-arrow-v-reverse" />
    </svg>`
  },
  CARDIO: {
    name: "Cardio y Resistencia Metabólica",
    execution: "Realizá movimientos cíclicos continuos u ejercicios pliométricos de manera explosiva para elevar las pulsaciones y el gasto calórico.",
    postureTip: "Amortiguá los saltos cayendo suavemente con la punta del pie antes del talón.",
    equipment: {
      dumbbells: "Hacé Propulsores (Thrusters: sentadilla más press de hombro continuo) con mancuernas livianas.",
      barbell: "Hacé Thrusters con barra vacía o remo en plancha alternado.",
      kettlebell: "Realizá balanceos de pesa rusa (kettlebell swings) continuos.",
      bodyweight: "Hacé jumping jacks rápidos, mountain climbers o burpees adaptados."
    },
    svg: `<svg viewBox="0 0 100 100" class="svg-exercise">
      <g class="anim-cardio-group">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--accent)" transform="translate(38, 38) scale(1)" class="cardio-heart" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="var(--accent)" stroke-width="1.5" class="cardio-pulse1" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="var(--accent)" stroke-width="1" class="cardio-pulse2" />
      </g>
    </svg>`
  }
};

function getExercisePattern(exerciseName) {
  const name = exerciseName.toLowerCase();
  if (name.includes("sentadilla") || name.includes("squat")) return EXERCISE_PATTERNS.SQUAT;
  if (name.includes("flexión") || name.includes("pushup") || name.includes("apertura") || name.includes("pecho")) return EXERCISE_PATTERNS.PUSH;
  if (name.includes("remo") || name.includes("tracción")) return EXERCISE_PATTERNS.ROW;
  if (name.includes("zancada") || name.includes("estocada") || name.includes("lunge")) return EXERCISE_PATTERNS.LUNGE;
  if (name.includes("peso muerto") || name.includes("glúteo") || name.includes("superman")) return EXERCISE_PATTERNS.POSTERIOR;
  if (name.includes("militar") || name.includes("hombro") || name.includes("vuelo") || name.includes("pájaro") || name.includes("pica")) return EXERCISE_PATTERNS.SHOULDER;
  if (name.includes("bícep") || name.includes("trícep") || name.includes("brazo") || name.includes("fondo")) return EXERCISE_PATTERNS.ARMS;
  if (name.includes("talón") || name.includes("gemelo")) return EXERCISE_PATTERNS.CALVES;
  if (name.includes("plancha") || name.includes("abdominal") || name.includes("crunch") || name.includes("dead bug") || name.includes("bicho muerto") || name.includes("v-up") || name.includes("tijera") || name.includes("core") || name.includes("rotación torácica")) return EXERCISE_PATTERNS.CORE;
  return EXERCISE_PATTERNS.CARDIO;
}

function getEquipmentAdvice(pattern, userEquipment) {
  let advices = [];
  if (userEquipment && userEquipment.length > 0) {
    userEquipment.forEach(eq => {
      if (eq === 'dumbbells' && pattern.equipment.dumbbells) {
        advices.push(`<strong>Mancuernas:</strong> ${pattern.equipment.dumbbells}`);
      }
      if (eq === 'barbell' && pattern.equipment.barbell) {
        advices.push(`<strong>Barra:</strong> ${pattern.equipment.barbell}`);
      }
      if (eq === 'kettlebell' && pattern.equipment.kettlebell) {
        advices.push(`<strong>Pesa Rusa:</strong> ${pattern.equipment.kettlebell}`);
      }
    });
  }
  if (advices.length === 0) {
    advices.push(`<strong>Peso Corporal:</strong> ${pattern.equipment.bodyweight}`);
  }
  return advices.join('<br>');
}

// 4. Controller Actions
const Actions = {
  createProfile(name, weight, height, age, gender, goal, equipment = []) {
    const newProfile = {
      id: Date.now().toString(),
      name,
      weight: parseFloat(weight),
      height: parseFloat(height),
      age: parseInt(age),
      gender,
      goal,
      equipment,
      phase: 1, // Start at phase 1
      week: 1,  // Start at week 1
      streak: 0,
      lastCompletedDate: null,
      history: {}, // Store completed workouts: { "phase-week-day": true }
      exerciseWeights: {} // Stores exercise weights: { exerciseName: weight }
    };
    State.profiles.push(newProfile);
    State.activeProfileId = newProfile.id;
    saveState();
    return newProfile;
  },

  updateProfile(id, name, weight, height, age, gender, goal, phase, week, equipment = []) {
    const profile = State.profiles.find(p => p.id === id);
    if (profile) {
      profile.name = name;
      profile.weight = parseFloat(weight);
      profile.height = parseFloat(height);
      profile.age = parseInt(age);
      profile.gender = gender;
      profile.goal = goal;
      profile.phase = parseInt(phase);
      profile.week = parseInt(week);
      profile.equipment = equipment;
      if (!profile.exerciseWeights) {
        profile.exerciseWeights = {};
      }
      saveState();
    }
  },

  saveExerciseWeight(profileId, exerciseName, weight) {
    const profile = State.profiles.find(p => p.id === profileId);
    if (profile) {
      if (!profile.exerciseWeights) {
        profile.exerciseWeights = {};
      }
      profile.exerciseWeights[exerciseName] = parseFloat(weight) || 0;
      saveState();
    }
  },

  exportState() {
    try {
      const dataStr = localStorage.getItem('gymflow_state');
      if (!dataStr) {
        alert("No hay datos para exportar.");
        return;
      }
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = 'gymflow_backup_' + new Date().toISOString().split('T')[0] + '.json';
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    } catch (e) {
      console.error('Error al exportar los datos:', e);
      alert('Ocurrió un error al exportar los datos.');
    }
  },

  importState(fileContent) {
    try {
      const parsed = JSON.parse(fileContent);
      if (parsed && typeof parsed === 'object' && Array.isArray(parsed.profiles)) {
        localStorage.setItem('gymflow_state', JSON.stringify(parsed));
        alert('¡Datos importados con éxito! La página se recargará.');
        window.location.reload();
      } else {
        alert('El archivo no tiene el formato correcto de GymFlow.');
      }
    } catch (e) {
      console.error('Error al importar los datos:', e);
      alert('El archivo seleccionado no es un JSON válido.');
    }
  },

  deleteProfile(id) {
    State.profiles = State.profiles.filter(p => p.id !== id);
    if (State.activeProfileId === id) {
      State.activeProfileId = State.profiles.length > 0 ? State.profiles[0].id : null;
    }
    saveState();
  },

  switchProfile(id) {
    State.activeProfileId = id;
    saveState();
  },

  toggleWorkoutDay(profileId, phase, week, dayIndex) {
    const profile = State.profiles.find(p => p.id === profileId);
    if (!profile) return;

    const key = `${phase}-${week}-${dayIndex}`;
    const wasCompleted = !!profile.history[key];

    if (wasCompleted) {
      // Uncheck
      delete profile.history[key];
    } else {
      // Check as completed
      profile.history[key] = true;
      
      // Update streak
      const todayStr = new Date().toISOString().split('T')[0];
      const lastCompleted = profile.lastCompletedDate;

      if (!lastCompleted) {
        profile.streak = 1;
      } else {
        const lastDate = new Date(lastCompleted);
        const todayDate = new Date(todayStr);
        const diffTime = Math.abs(todayDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Worked out consecutive day
          profile.streak += 1;
        } else if (diffDays > 1) {
          // Streak broken
          profile.streak = 1;
        }
      }
      profile.lastCompletedDate = todayStr;
    }
    saveState();
  },


};

// 5. UI Rendering Engine
const UI = {
  // Elements Cache
  elements: {},

  init() {
    loadState();
    
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      let isRefreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!isRefreshing) {
          isRefreshing = true;
          window.location.reload();
        }
      });
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          reg.update().catch(() => {});
          if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
          console.log('Service Worker Registered');
        })
        .catch(err => console.error('Service Worker Registration Failed:', err));
    }

    // Cache elements
    this.elements.welcomeScreen = document.getElementById('welcome-screen');
    this.elements.appLayout = document.getElementById('app-layout');
    this.elements.profileSelect = document.getElementById('profile-select');
    this.elements.activeProfileName = document.getElementById('active-profile-name');
    this.elements.bmiVal = document.getElementById('bmi-value');
    this.elements.bmiCat = document.getElementById('bmi-category');
    this.elements.waterVal = document.getElementById('water-value');
    this.elements.streakVal = document.getElementById('streak-value');
    this.elements.workoutContent = document.getElementById('workout-content');
    
    this.elements.profileForm = document.getElementById('profile-form');
    this.elements.profileFormTitle = document.getElementById('profile-form-title');
    this.elements.profileModal = document.getElementById('profile-modal');
    
    // Set up global triggers
    this.setupEventListeners();
    
    // Initial Render
    this.render();
  },

  setupEventListeners() {
    // Switch Profile Dropdown
    this.elements.profileSelect.addEventListener('change', (e) => {
      if (e.target.value === 'new') {
        this.showProfileModal(null);
        this.elements.profileSelect.value = State.activeProfileId || '';
      } else {
        Actions.switchProfile(e.target.value);
        this.render();
      }
    });

    // Handle Profile Form Submission
    this.elements.profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const profileId = form.dataset.profileId;
      
      const name = form.elements['name'].value;
      const weight = form.elements['weight'].value;
      const height = form.elements['height'].value;
      const age = form.elements['age'].value;
      const gender = form.elements['gender'].value;
      const goal = form.elements['goal'].value;
      const phase = form.elements['phase'] ? form.elements['phase'].value : 1;
      const week = form.elements['week'] ? form.elements['week'].value : 1;
      
      // Parse equipment checkboxes
      const equipment = Array.from(form.querySelectorAll('input[name="equipment"]:checked')).map(cb => cb.value);

      if (profileId) {
        Actions.updateProfile(profileId, name, weight, height, age, gender, goal, phase, week, equipment);
      } else {
        Actions.createProfile(name, weight, height, age, gender, goal, equipment);
      }

      this.hideProfileModal();
      this.render();
    });

    // Live Recommendation listener
    const handleLiveRecommend = () => {
      const w = this.elements.profileForm.elements['weight'].value;
      const h = this.elements.profileForm.elements['height'].value;
      const sugText = document.getElementById('goal-suggestion-text');
      if (w && h) {
        const rec = getGoalRecommendation(w, h);
        sugText.innerHTML = rec.text;
        sugText.style.color = '#ff6b00';
        
        // Auto-select if creating
        if (!this.elements.profileForm.dataset.profileId && rec.goal) {
          this.elements.profileForm.elements['goal'].value = rec.goal;
        }
      } else {
        sugText.innerHTML = '';
      }
    };
    this.elements.profileForm.elements['weight'].addEventListener('input', handleLiveRecommend);
    this.elements.profileForm.elements['height'].addEventListener('input', handleLiveRecommend);

    // Backup Buttons (Footer)
    document.getElementById('btn-export').addEventListener('click', () => {
      Actions.exportState();
    });

    document.getElementById('file-import').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        Actions.importState(evt.target.result);
      };
      reader.readAsText(file);
    });

    // Rest Timer Controls
    const timerPlayPauseBtn = document.getElementById('btn-timer-play-pause');
    if (timerPlayPauseBtn) {
      timerPlayPauseBtn.addEventListener('click', () => {
        this.toggleTimerPlayPause();
      });
    }

    const timerSkipBtn = document.getElementById('btn-timer-skip');
    if (timerSkipBtn) {
      timerSkipBtn.addEventListener('click', () => {
        this.skipRestTimer();
      });
    }
  },

  showProfileModal(profile = null) {
    const modal = this.elements.profileModal;
    const form = this.elements.profileForm;
    const title = this.elements.profileFormTitle;

    modal.style.display = 'flex';
    document.getElementById('goal-suggestion-text').innerHTML = '';

    // Toggle Phase/Week dropdowns based on edit vs create
    const phaseWeekGroup = document.getElementById('form-phase-week-group');

    if (profile) {
      title.innerText = 'Editar Perfil';
      form.dataset.profileId = profile.id;
      form.elements['name'].value = profile.name;
      form.elements['weight'].value = profile.weight;
      form.elements['height'].value = profile.height;
      form.elements['age'].value = profile.age;
      form.elements['gender'].value = profile.gender;
      form.elements['goal'].value = profile.goal;
      
      // Select checked equipment
      const userEquip = profile.equipment || [];
      form.querySelectorAll('input[name="equipment"]').forEach(cb => {
        cb.checked = userEquip.includes(cb.value);
      });
      
      // Render phase and week fields
      phaseWeekGroup.innerHTML = `
        <div class="form-row">
          <div class="form-group">
            <label for="form-phase">Fase de Entrenamiento</label>
            <select id="form-phase" name="phase">
              <option value="1" ${profile.phase === 1 ? 'selected' : ''}>Fase 1: Acondicionamiento</option>
              <option value="2" ${profile.phase === 2 ? 'selected' : ''}>Fase 2: Fuerza</option>
              <option value="3" ${profile.phase === 3 ? 'selected' : ''}>Fase 3: Definición</option>
            </select>
          </div>
          <div class="form-group">
            <label for="form-week">Semana Activa</label>
            <select id="form-week" name="week">
              ${[1,2,3,4].map(w => `<option value="${w}" ${profile.week === w ? 'selected' : ''}>Semana ${w}</option>`).join('')}
            </select>
          </div>
        </div>
      `;
    } else {
      title.innerText = 'Crear Perfil';
      form.dataset.profileId = '';
      form.reset();
      form.querySelectorAll('input[name="equipment"]').forEach(cb => {
        cb.checked = false;
      });
      phaseWeekGroup.innerHTML = ''; // Keep simple on create
    }
  },

  hideProfileModal() {
    this.elements.profileModal.style.display = 'none';
  },

  render() {
    const profile = getActiveProfile();

    if (!profile) {
      // Show Welcome / Onboarding Screen
      this.elements.welcomeScreen.style.display = 'flex';
      this.elements.appLayout.style.display = 'none';
      
      // Setup click on main create button
      document.getElementById('btn-onboard-create').onclick = () => this.showProfileModal(null);
      return;
    }

    // Show App layout
    this.elements.welcomeScreen.style.display = 'none';
    this.elements.appLayout.style.display = 'grid';

    // Populate profile selector dropdown
    this.elements.profileSelect.innerHTML = `
      ${State.profiles.map(p => `<option value="${p.id}" ${p.id === profile.id ? 'selected' : ''}>${p.name}</option>`).join('')}
      <option value="new">+ Agregar Perfil...</option>
    `;

    // Active Profile Name & Info
    this.elements.activeProfileName.innerText = profile.name;
    
    // Add Edit and Delete actions in headers
    document.getElementById('btn-edit-profile').onclick = () => this.showProfileModal(profile);
    document.getElementById('btn-delete-profile').onclick = () => {
      if (confirm(`¿Seguro que querés eliminar el perfil de ${profile.name}? Esta acción no se puede deshacer.`)) {
        Actions.deleteProfile(profile.id);
        this.render();
      }
    };
    document.getElementById('btn-export-data').onclick = () => Actions.exportState();
    
    const importInput = document.getElementById('import-file-input');
    document.getElementById('btn-import-data').onclick = () => importInput.click();
    
    importInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        Actions.importState(evt.target.result);
      };
      reader.readAsText(file);
    };

    // Calculate metrics
    const bmiVal = calculateBMI(profile.weight, profile.height);
    const bmiCat = getBMICategory(bmiVal);
    const waterVal = calculateWaterTarget(profile.weight);
    const idealWeightVal = calculateIdealWeight(profile.height, profile.gender);

    // Populate Dashboard Cards
    this.elements.bmiVal.innerText = bmiVal;
    this.elements.bmiCat.innerText = bmiCat.text;
    this.elements.bmiCat.style.color = bmiCat.color;
    this.elements.waterVal.innerText = `${(waterVal / 1000).toFixed(1)} L`;
    this.elements.streakVal.innerText = `${profile.streak} ${profile.streak === 1 ? 'día' : 'días'}`;
    
    // Populate Ideal Weight Card
    document.getElementById('ideal-weight-value').innerText = `${idealWeightVal} kg`;

    // Render Workouts for Active Goal, Phase and Week
    this.renderWorkoutsSection(profile);
  },

  renderWorkoutsSection(profile) {
    const goalData = WORKOUT_DATABASE[profile.goal];
    if (!goalData) return;

    const phaseData = goalData[profile.phase];
    if (!phaseData) return;

    let html = `
      <div class="routine-header-card">
        <h3>${phaseData.name}</h3>
        <p>${phaseData.description}</p>
        <div class="phase-progress-badges">
          <span class="badge">Fase ${profile.phase} de 3</span>
          <span class="badge">Semana ${profile.week} de 4</span>
        </div>
      </div>
      <div class="workout-week-nav">
    `;

    // Dropdowns or buttons to switch weeks dynamically on main layout
    html += `
      <div class="week-picker-selector">
        <label>Cambiar Semana:</label>
        <select id="quick-week-select" class="glass-select">
          ${[1, 2, 3, 4].map(w => `<option value="${w}" ${profile.week === w ? 'selected' : ''}>Semana ${w}</option>`).join('')}
        </select>
      </div>
      <div class="phase-picker-selector">
        <label>Cambiar Fase:</label>
        <select id="quick-phase-select" class="glass-select">
          <option value="1" ${profile.phase === 1 ? 'selected' : ''}>Fase 1: Acondicionamiento</option>
          <option value="2" ${profile.phase === 2 ? 'selected' : ''}>Fase 2: Fuerza</option>
          <option value="3" ${profile.phase === 3 ? 'selected' : ''}>Fase 3: Definición</option>
        </select>
      </div>
    </div>
    <div class="workout-days-list">
    `;

    // Render workouts for each day of the phase
    phaseData.days.forEach((day, dayIdx) => {
      const key = `${profile.phase}-${profile.week}-${dayIdx}`;
      const isDayCompleted = !!profile.history[key];

      html += `
        <div class="workout-day-card ${isDayCompleted ? 'completed' : ''}">
          <div class="day-card-header">
            <h4>${day.name}</h4>
            <button class="btn-complete-day ${isDayCompleted ? 'completed' : ''}" data-day-index="${dayIdx}">
              ${isDayCompleted ? '✓ Completado' : 'Marcar como Completado'}
            </button>
          </div>
          <ul class="exercise-list">
      `;

      day.exercises.forEach((ex, exIdx) => {
        const pattern = getExercisePattern(ex.name);
        const equipAdvice = getEquipmentAdvice(pattern, profile.equipment);
        const savedWeight = profile.exerciseWeights && profile.exerciseWeights[ex.name] !== undefined ? profile.exerciseWeights[ex.name] : '';

        html += `
          <li class="exercise-item collapsible" onclick="UI.toggleExerciseDetails(this)">
            <div class="exercise-row">
              <div class="exercise-main">
                <span class="exercise-name">${ex.name}</span>
                <span class="exercise-target">${ex.target}</span>
              </div>
              <span class="chevron">▼</span>
            </div>
            <div class="exercise-specs">
              <span class="spec-badge">${ex.sets} Series</span>
              <span class="spec-badge">${ex.reps} Reps</span>
              <span class="spec-badge timer-badge" onclick="event.stopPropagation(); UI.startRestTimer(${ex.rest}, this)">⏱ ${ex.rest}s Descanso</span>
            </div>
            <div class="exercise-details">
              <div class="details-body">
                <div class="details-text">
                  <p><strong>Ejecución correcta:</strong> ${pattern.execution}</p>
                  <p class="details-posture">⚠️ <strong>Postura:</strong> ${pattern.postureTip}</p>
                  <p class="details-equip-box">🛠️ <strong>Variación recomendada:</strong><br>${equipAdvice}</p>
                  <div class="weight-tracker" onclick="event.stopPropagation()">
                    <label class="weight-label">⚖️ Peso registrado:</label>
                    <div class="weight-input-group">
                      <input type="number" 
                             class="weight-input glass-input" 
                             data-exercise-name="${ex.name}" 
                             placeholder="Sin peso" 
                             value="${savedWeight}" 
                             min="0" 
                             step="0.5">
                      <span class="weight-unit">kg</span>
                    </div>
                  </div>
                </div>
                <div class="exercise-visual-guide">
                  ${pattern.svg || ''}
                </div>
              </div>
            </div>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    });

    html += `</div>`;
    this.elements.workoutContent.innerHTML = html;

    // Attach local triggers for workouts view
    document.getElementById('quick-week-select').addEventListener('change', (e) => {
      profile.week = parseInt(e.target.value);
      saveState();
      this.render();
    });

    document.getElementById('quick-phase-select').addEventListener('change', (e) => {
      profile.phase = parseInt(e.target.value);
      saveState();
      this.render();
    });

    // Mark completed buttons
    const completeButtons = this.elements.workoutContent.querySelectorAll('.btn-complete-day');
    completeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Avoid expanding accordion when clicking complete
        const dayIdx = parseInt(e.target.dataset.dayIndex);
        Actions.toggleWorkoutDay(profile.id, profile.phase, profile.week, dayIdx);
        this.render();
      });
    });

    // Auto-save weights
    const weightInputs = this.elements.workoutContent.querySelectorAll('.weight-input');
    weightInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        const exerciseName = e.target.dataset.exerciseName;
        const weightVal = parseFloat(e.target.value);
        Actions.saveExerciseWeight(profile.id, exerciseName, weightVal);
      });
    });
  },

  toggleExerciseDetails(element) {
    const details = element.querySelector('.exercise-details');
    const chevron = element.querySelector('.chevron');
    const isExpanded = element.classList.contains('expanded');

    // Close all other open exercises on the same day card
    const list = element.closest('.exercise-list');
    list.querySelectorAll('.exercise-item').forEach(item => {
      if (item !== element) {
        item.classList.remove('expanded');
        item.querySelector('.exercise-details').style.maxHeight = null;
        item.querySelector('.chevron').style.transform = null;
      }
    });

    if (isExpanded) {
      element.classList.remove('expanded');
      details.style.maxHeight = null;
      chevron.style.transform = null;
    } else {
      element.classList.add('expanded');
      // Set max-height to the scrollHeight of details for smooth transition
      details.style.maxHeight = details.scrollHeight + "px";
      chevron.style.transform = "rotate(180deg)";
    }
  },

  // Rest Timer properties
  timerInterval: null,
  timerSecondsRemaining: 0,
  timerTotalSeconds: 0,
  timerIsPaused: false,

  startRestTimer(seconds, badgeElement) {
    // Clear any active timer first
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    this.timerTotalSeconds = seconds;
    this.timerSecondsRemaining = seconds;
    this.timerIsPaused = false;

    // Show container
    const container = document.getElementById('floating-timer-container');
    if (container) {
      container.style.display = 'block';
    }

    // Reset button state
    const playPauseBtn = document.getElementById('btn-timer-play-pause');
    if (playPauseBtn) {
      playPauseBtn.innerText = 'Pausar';
    }

    this.updateTimerDisplay();

    // Start countdown
    this.timerInterval = setInterval(() => {
      if (!this.timerIsPaused) {
        this.timerSecondsRemaining--;
        this.updateTimerDisplay();
        
        if (this.timerSecondsRemaining <= 0) {
          this.timerFinished();
        }
      }
    }, 1000);
  },

  updateTimerDisplay() {
    const minutes = Math.floor(this.timerSecondsRemaining / 60);
    const secs = this.timerSecondsRemaining % 60;
    const timeStr = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    const countdownEl = document.getElementById('timer-countdown');
    if (countdownEl) {
      countdownEl.innerText = timeStr;
    }

    const progressFill = document.getElementById('timer-progress-fill');
    if (progressFill && this.timerTotalSeconds > 0) {
      const percentage = (this.timerSecondsRemaining / this.timerTotalSeconds) * 100;
      progressFill.style.width = `${percentage}%`;
    }
  },

  toggleTimerPlayPause() {
    this.timerIsPaused = !this.timerIsPaused;
    const playPauseBtn = document.getElementById('btn-timer-play-pause');
    if (playPauseBtn) {
      playPauseBtn.innerText = this.timerIsPaused ? 'Reanudar' : 'Pausar';
    }
  },

  skipRestTimer() {
    this.timerFinished();
  },

  closeRestTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    const container = document.getElementById('floating-timer-container');
    if (container) {
      container.style.display = 'none';
    }
  },

  timerFinished() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    
    // Set text to finish
    const countdownEl = document.getElementById('timer-countdown');
    if (countdownEl) {
      countdownEl.innerText = '¡Listo!';
    }
    
    const progressFill = document.getElementById('timer-progress-fill');
    if (progressFill) {
      progressFill.style.width = '0%';
    }

    // Play double beep sound
    this.playTimerBeep();

    // Vibrate device if supported
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }

    // Close timer container after a short delay
    setTimeout(() => {
      this.closeRestTimer();
    }, 1500);
  },

  playTimerBeep() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      const playBeep = (time, duration) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, time); // A5 note
        
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.15, time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
        
        osc.start(time);
        osc.stop(time + duration);
      };
      
      const now = audioCtx.currentTime;
      playBeep(now, 0.15);
      playBeep(now + 0.25, 0.15); // double beep
    } catch (err) {
      console.error('Audio beep failed:', err);
    }
  }
};

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
  UI.init();
});

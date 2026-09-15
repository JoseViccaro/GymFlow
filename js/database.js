// GymFlow - Workout & Exercise Database

export const WEEK_PERIODIZATION = {
  1: {
    week: 1,
    title: "Semana 1: Adaptación y Técnica Base",
    tag: "🌱 Base & Técnica",
    description: "Enfoque en dominar la técnica estricta y rango completo. Registrá tus pesos iniciales de referencia.",
    repsSuffix: "",
    badgeClass: "week-tag-1",
    progressionAdvice: "Calibrá tu carga: sentí el músculo trabajar sin llegar al fallo."
  },
  2: {
    week: 2,
    title: "Semana 2: Sobrecarga Progresiva (+Volumen)",
    tag: "⚡ +Sobrecarga Progresiva",
    description: "El cuerpo ya se adaptó al movimiento. Intentá sumar 1 o 2 repeticiones por serie o subir +2.5 kg manteniendo la forma.",
    repsSuffix: " (+1-2 reps)",
    badgeClass: "week-tag-2",
    progressionAdvice: "Superá los números de la Semana 1: anota más peso o más repeticiones."
  },
  3: {
    week: 3,
    title: "Semana 3: Intensidad & Volumen Máximo",
    tag: "🔥 Intensidad Máxima",
    description: "Semana cumbre de exigencia muscular. Buscá tu límite técnico con máximo esfuerzo (RIR 1-2) en la última serie.",
    repsSuffix: " (Pico Máx)",
    badgeClass: "week-tag-3",
    progressionAdvice: "Pico del mesociclo: exigencia alta con series al límite técnico."
  },
  4: {
    week: 4,
    title: "Semana 4: Descarga Activa & Deload",
    tag: "🛡️ Descarga (Deload)",
    description: "Semana de recuperación estratégica. Reducí el peso un 15-20% para regenerar articulaciones y sistema nervioso antes de avanzar a la siguiente Fase.",
    repsSuffix: " (Descarga)",
    badgeClass: "week-tag-4",
    progressionAdvice: "Descarga: movete con fluidez y control sin generar fatiga residual."
  }
};

export function getWeekPeriodization(weekNumber) {
  const w = parseInt(weekNumber, 10) || 1;
  return WEEK_PERIODIZATION[w] || WEEK_PERIODIZATION[1];
}

export const WORKOUT_DATABASE = {
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

export const EXERCISE_PATTERNS = {
  "SQUAT": {
    "mediaUrl": "assets/exercises/squat.gif",
    "name": "Sentadilla (Squat)",
    "primaryMuscles": "Cuádriceps (Vasto externo, medio y recto femoral) & Glúteo Mayor",
    "secondaryMuscles": "Isquiotibiales, Aductores y Core Lumbar",
    "execution": "Flexioná caderas y rodillas manteniendo la espalda neutra y el pecho erguido hasta que tus muslos queden al menos paralelos al suelo. Empujá con toda la planta del pie para levantarte.",
    "postureTip": "Tus rodillas deben viajar siempre en la misma dirección que la punta de tus pies. No levantes los talones del suelo.",
    "steps": [
      "1. Posición Inicial: Parate con los pies al ancho de hombros y las puntas ligeramente abiertas hacia afuera (unos 15 a 30 grados). Pecho alto y abdomen firme.",
      "2. Descenso Controlado: Iniciá el movimiento empujando la cadera hacia atrás como si fueras a sentarte en una silla baja, mientras flexionás las rodillas con control.",
      "3. Profundidad: Bajá hasta que tus caderas queden a la misma altura o ligeramente por debajo de tus rodillas (paralelo).",
      "4. Empuje y Retorno: Empujá el suelo firmemente a través de los talones y el mediopié, contrayendo glúteos y cuádriceps hasta quedar completamente de pie."
    ],
    "breathing": "Inhalá hondo y llená tu abdomen antes de empezar a bajar; retené el aire durante la bajada y exhalá con fuerza al subir.",
    "commonMistakes": [
      "Dejar que las rodillas se vayan hacia adentro (valgo de rodilla).",
      "Despegar los talones del suelo y pasar todo el peso a la punta de los pies.",
      "Encorvar la espalda baja o mirar hacia abajo en lugar de mantener el pecho erguido."
    ],
    "equipment": {
      "dumbbells": "Sostené una mancuerna pesada pegada al pecho (Sentadilla Goblet) o dos mancuernas sobre tus hombros.",
      "barbell": "Colocá la barra apoyada sobre tus trapecios (barra alta) y retraé los omóplatos firmemente.",
      "kettlebell": "Sostené la pesa rusa por los cuernos a la altura del esternón manteniendo los codos cerrados.",
      "bodyweight": "Extendé los brazos hacia adelante a la altura de los hombros para hacer contrapeso natural."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Floor -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"115\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"80\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Lower Shins & Feet (Fixed on ground) -->\n  <g class=\"anat-feet-base\">\n    <path d=\"M110 235 L104 274 L132 274 L126 235 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <path d=\"M210 235 L216 274 L188 274 L194 235 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <!-- Feet shoes -->\n    <rect x=\"94\" y=\"270\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n    <rect x=\"184\" y=\"270\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n  </g>\n\n  <!-- Moving Torso & Thighs Group (Kinetics) -->\n  <g class=\"anim-squat-torso\">\n    <!-- Head & Neck -->\n    <path d=\"M148 48 Q160 40 172 48 Q178 64 160 70 Q142 64 148 48 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" stroke-width=\"1.2\" />\n    \n    <!-- Torso (Traps, Chest, Abs) -->\n    <path d=\"M130 76 Q160 70 190 76 L204 115 L116 115 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <!-- Chest -->\n    <path d=\"M124 110 Q160 114 196 110 L190 145 Q160 152 130 145 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#2d3748\" />\n    <!-- Abs -->\n    <rect x=\"146\" y=\"150\" width=\"12\" height=\"14\" rx=\"2\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" />\n    <rect x=\"162\" y=\"150\" width=\"12\" height=\"14\" rx=\"2\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" />\n    <rect x=\"146\" y=\"166\" width=\"12\" height=\"14\" rx=\"2\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" />\n    <rect x=\"162\" y=\"166\" width=\"12\" height=\"14\" rx=\"2\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" />\n\n    <!-- Shoulders & Arms holding barbell on traps -->\n    <circle cx=\"112\" cy=\"85\" r=\"14\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <circle cx=\"208\" cy=\"85\" r=\"14\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <!-- Barbell on Traps -->\n    <rect x=\"40\" y=\"76\" width=\"240\" height=\"7\" rx=\"3\" fill=\"url(#chromeSteel)\" stroke=\"#111\" stroke-width=\"1.2\" />\n    <rect x=\"42\" y=\"60\" width=\"14\" height=\"38\" rx=\"2\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n    <rect x=\"264\" y=\"60\" width=\"14\" height=\"38\" rx=\"2\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n\n    <!-- Glutes (Secondary Target) -->\n    <path d=\"M136 195 Q160 205 184 195 L196 220 Q160 230 124 220 Z\" class=\"anat-active-secondary\" />\n\n    <!-- TARGET MUSCLES: QUADRICEPS (Vastus Lateralis, Medialis & Rectus Femoris) -->\n    <g class=\"anim-squat-quads\">\n      <!-- Left Quad -->\n      <path class=\"anat-active-muscle\" d=\"M136 200 C120 205 110 220 114 246 C116 256 128 258 136 248 C144 238 146 220 142 200 Z\" />\n      <path class=\"anat-fiber-line\" d=\"M136 208 Q126 222 120 242\" />\n      <path class=\"anat-fiber-line\" d=\"M140 214 Q132 230 128 248\" />\n\n      <!-- Right Quad -->\n      <path class=\"anat-active-muscle\" d=\"M184 200 C200 205 210 220 206 246 C204 256 192 258 184 248 C176 238 174 220 178 200 Z\" />\n      <path class=\"anat-fiber-line\" d=\"M184 208 Q194 222 200 242\" />\n      <path class=\"anat-fiber-line\" d=\"M180 214 Q188 230 192 248\" />\n    </g>\n  </g>\n</svg>"
  },
  "PUSH": {
    "mediaUrl": "assets/exercises/pushup.gif",
    "name": "Flexiones / Empuje de Pecho (Push-up / Press)",
    "primaryMuscles": "Pectorales Mayores (Fibras Medias y Claviculares)",
    "secondaryMuscles": "Deltoides Anterior, Tríceps Braquial y Serrato",
    "execution": "Colocá las manos un poco más anchas que tus hombros. Bajá todo el cuerpo en bloque manteniendo los codos en un ángulo de 45° respecto al torso hasta rozar el suelo con el pecho, luego empujá el piso para subir.",
    "postureTip": "Mantené el cuerpo en línea recta desde los talones hasta la cabeza como si fueras una tabla rígida.",
    "steps": [
      "1. Posición Inicial: Manos apoyadas en el suelo a la altura del pecho, separadas un poco más que el ancho de hombros. Dedos bien abiertos y firmes.",
      "2. Activación del Core: Apretá glúteos y abdomen para que tu cadera no caiga ni se levante como una carpa.",
      "3. Descenso: Flexioná los codos en diagonal hacia atrás (formando una flecha con tu cuerpo, nunca en T a 90 grados) hasta que tu pecho quede a 2 cm del piso.",
      "4. Empuje Potente: Empujá el suelo alejándote de él con fuerza hasta extender los brazos completamente sin bloquear rígidamente los codos."
    ],
    "breathing": "Inhalá mientras bajás el cuerpo con control hacia el suelo; exhalá mientras empujás para regresar a la posición inicial.",
    "commonMistakes": [
      "Abrir los codos a 90 grados (en forma de T), lo que lesiona los manguitos rotadores del hombro.",
      "Dejar que la pelvis se hunda arqueando la zona lumbar.",
      "Mover solo el cuello hacia abajo fingiendo que se bajó todo el cuerpo."
    ],
    "equipment": {
      "dumbbells": "Acostate en el suelo y hacé Press de Pecho (Floor Press) empujando las mancuernas hacia el techo.",
      "barbell": "Realizá Press de Banca plano o en el suelo bajando la barra con control hasta rozar el pecho.",
      "kettlebell": "Realizá Floor Press unilateral con pesa rusa o flexiones apoyando las manos en las manijas.",
      "bodyweight": "Si cuesta mucho, apoyá las rodillas en el piso o poné las manos en una mesa o pared (flexión inclinada)."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Circular Arena -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"110\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"75\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Anatomical Body (Incline / Bench Press Pose) -->\n  <g class=\"anat-body-base\">\n    <!-- Head & Neck -->\n    <path d=\"M148 76 Q160 68 172 76 Q178 94 160 100 Q142 94 148 76 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" stroke-width=\"1.2\" />\n    <path d=\"M152 98 L148 116 L172 116 L168 98 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#2d3748\" />\n    <!-- Traps -->\n    <path d=\"M136 114 Q160 106 184 114 L196 128 L124 128 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    \n    <!-- Ribcage & Core (Rectus Abdominis 6-Pack in Slate Anatomy) -->\n    <!-- Upper Abs -->\n    <rect x=\"145\" y=\"174\" width=\"13\" height=\"15\" rx=\"3\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" stroke-width=\"1\" />\n    <rect x=\"162\" y=\"174\" width=\"13\" height=\"15\" rx=\"3\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" stroke-width=\"1\" />\n    <!-- Mid Abs -->\n    <rect x=\"145\" y=\"192\" width=\"13\" height=\"15\" rx=\"3\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" stroke-width=\"1\" />\n    <rect x=\"162\" y=\"192\" width=\"13\" height=\"15\" rx=\"3\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" stroke-width=\"1\" />\n    <!-- Lower Abs -->\n    <rect x=\"147\" y=\"210\" width=\"11\" height=\"16\" rx=\"3\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" stroke-width=\"1\" />\n    <rect x=\"162\" y=\"210\" width=\"11\" height=\"16\" rx=\"3\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" stroke-width=\"1\" />\n    <!-- Serratus / Obliques -->\n    <path d=\"M125 168 Q138 174 142 182 L140 190 Q130 182 122 176 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#4a5568\" />\n    <path d=\"M195 168 Q182 174 178 182 L180 190 Q190 182 198 176 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#4a5568\" />\n    <path d=\"M124 186 Q136 192 142 200 L140 208 Q130 200 120 194 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#4a5568\" />\n    <path d=\"M196 186 Q184 192 178 200 L180 208 Q190 200 200 194 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#4a5568\" />\n\n    <!-- Thighs / Legs (Seated / Incline support) -->\n    <path d=\"M140 230 L126 270 L144 270 L155 232 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <path d=\"M180 230 L194 270 L176 270 L165 232 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n\n    <!-- TARGET MUSCLE: PECTORALIS MAJOR (Glowing Vivid Orange/Red) -->\n    <g class=\"anim-press-chest\">\n      <!-- Left Pectoral -->\n      <path class=\"anat-active-muscle\" d=\"M160 124 C142 124 128 130 120 142 C118 160 134 170 152 172 C158 172 160 164 160 124 Z\" />\n      <!-- Left Pectoral Fibers -->\n      <path class=\"anat-fiber-line\" d=\"M160 130 Q144 134 126 146\" />\n      <path class=\"anat-fiber-line\" d=\"M160 140 Q146 144 130 156\" />\n      <path class=\"anat-fiber-line\" d=\"M160 150 Q150 154 136 164\" />\n\n      <!-- Right Pectoral -->\n      <path class=\"anat-active-muscle\" d=\"M160 124 C178 124 192 130 200 142 C202 160 186 170 168 172 C162 172 160 164 160 124 Z\" />\n      <!-- Right Pectoral Fibers -->\n      <path class=\"anat-fiber-line\" d=\"M160 130 Q176 134 194 146\" />\n      <path class=\"anat-fiber-line\" d=\"M160 140 Q174 144 190 156\" />\n      <path class=\"anat-fiber-line\" d=\"M160 150 Q170 154 184 164\" />\n    </g>\n  </g>\n\n  <!-- Animated Arms & Dumbbells (Continuous Pressing Motion) -->\n  <g class=\"anim-press-arms\">\n    <!-- Anterior Deltoids (Secondary Muscle Highlight) -->\n    <circle cx=\"112\" cy=\"138\" r=\"14\" class=\"anat-active-secondary\" />\n    <circle cx=\"208\" cy=\"138\" r=\"14\" class=\"anat-active-secondary\" />\n\n    <!-- Arms (Biceps/Triceps & Forearms) -->\n    <!-- Left Arm -->\n    <path d=\"M104 140 L92 98 L108 94 L116 136 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <path d=\"M92 98 L84 52 L100 50 L108 94 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <!-- Right Arm -->\n    <path d=\"M216 140 L228 98 L212 94 L204 136 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <path d=\"M228 98 L236 52 L220 50 L212 94 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n\n    <!-- Left Dumbbell -->\n    <g transform=\"translate(18, 0)\">\n      <rect x=\"56\" y=\"42\" width=\"36\" height=\"12\" rx=\"3\" fill=\"url(#chromeSteel)\" stroke=\"#111\" stroke-width=\"1.5\" />\n      <rect x=\"52\" y=\"36\" width=\"44\" height=\"6\" rx=\"2\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n      <rect x=\"52\" y=\"54\" width=\"44\" height=\"6\" rx=\"2\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n    </g>\n\n    <!-- Right Dumbbell -->\n    <g transform=\"translate(-18, 0)\">\n      <rect x=\"228\" y=\"42\" width=\"36\" height=\"12\" rx=\"3\" fill=\"url(#chromeSteel)\" stroke=\"#111\" stroke-width=\"1.5\" />\n      <rect x=\"224\" y=\"36\" width=\"44\" height=\"6\" rx=\"2\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n      <rect x=\"224\" y=\"54\" width=\"44\" height=\"6\" rx=\"2\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n    </g>\n  </g>\n</svg>"
  },
  "HINGE": {
    "mediaUrl": "assets/exercises/deadlift.gif",
    "name": "Bisagra de Cadera / Peso Muerto",
    "primaryMuscles": "Isquiotibiales (Bíceps Femoral) & Glúteo Mayor",
    "secondaryMuscles": "Erectores Espinales (Zona Lumbar), Trapecios y Antebrazos",
    "execution": "Empujá tus caderas hacia atrás flexionando muy levemente las rodillas y manteniendo la espalda recta. Sentí la tensión en los isquiotibiales y glúteos al bajar, luego empujá las caderas hacia adelante para ponerte de pie.",
    "postureTip": "El movimiento nace de la cadera, no de las rodillas ni doblando la columna lumbar.",
    "steps": [
      "1. Posición Inicial: Pies debajo de las caderas (ancho menor que en sentadilla). Hombros hacia atrás y abajo.",
      "2. Desplazamiento de Cadera: Llevá la cola hacia atrás como si quisieras tocar la pared detrás tuyo con los glúteos. El torso baja casi horizontal.",
      "3. Tensión Isquiotibial: Mantené las espinillas casi verticales y la espalda recta como una tabla. Bajá el peso pegado a tus piernas.",
      "4. Bloqueo Glúteo: Apretá los glúteos y empujá la pelvis hacia adelante para volver a la verticalidad completa."
    ],
    "breathing": "Inhalá hondo al inicio y durante el descenso; exhalá al empujar las caderas hacia adelante al finalizar.",
    "commonMistakes": [
      "Redondear la espalda alta o baja durante el levantamiento.",
      "Agacharse convirtiendo el ejercicio en una sentadilla en vez de llevar la cadera hacia atrás.",
      "Alejar el peso del cuerpo (debe rozar los muslos y espinillas)."
    ],
    "equipment": {
      "dumbbells": "Sostené dos mancuernas rozando tus muslos mientras flexionás las caderas.",
      "barbell": "Peso muerto rumano clásico llevando la barra pegada a tus piernas hasta justo debajo de la rodilla.",
      "kettlebell": "Peso muerto o balanceo (kettlebell swing) explosivo de cadera.",
      "bodyweight": "Puentes de glúteo en el piso o 'Buenos Días' con manos en la nuca activando la cadena posterior."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Floor -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"110\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"75\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Lower Legs & Feet (Stable on ground) -->\n  <path d=\"M145 220 L140 272 L164 272 L165 220 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n  <rect x=\"136\" y=\"268\" width=\"36\" height=\"8\" rx=\"3\" fill=\"#1f242c\" />\n\n  <!-- TARGET MUSCLES: HAMSTRINGS & GLUTEUS (Posterior Chain Glowing Orange) -->\n  <!-- Hamstrings (Biceps Femoris / Semitendinosus) -->\n  <g class=\"anat-hamstrings\">\n    <path class=\"anat-active-muscle\" d=\"M142 168 C130 180 128 200 138 225 C146 226 156 220 158 195 C160 178 152 168 142 168 Z\" />\n    <path class=\"anat-fiber-line\" d=\"M142 178 Q136 195 142 216\" />\n    <path class=\"anat-fiber-line\" d=\"M148 184 Q144 200 148 218\" />\n  </g>\n\n  <!-- Gluteus Maximus (Primary Power Driver) -->\n  <path class=\"anat-active-muscle\" d=\"M140 140 C122 148 120 170 138 185 C154 185 162 170 160 145 Z\" />\n\n  <!-- Hinging Torso & Arms with Barbell (anim-hinge-torso) -->\n  <g class=\"anim-hinge-torso\">\n    <!-- Spine & Lower Back (Erector Spinae Secondary Highlight) -->\n    <path class=\"anat-active-secondary\" d=\"M152 135 L144 95 L156 95 L162 135 Z\" />\n    <!-- Upper Back & Ribcage -->\n    <path d=\"M142 96 L130 65 L158 62 L162 95 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <!-- Head -->\n    <circle cx=\"138\" cy=\"50\" r=\"14\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <!-- Arms holding weights sliding down legs -->\n    <path d=\"M148 75 L152 145 L162 145 L158 75 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <!-- Barbell Plate & Bar -->\n    <circle cx=\"156\" cy=\"154\" r=\"18\" fill=\"url(#chromeSteel)\" stroke=\"#111\" stroke-width=\"1.5\" />\n    <circle cx=\"156\" cy=\"154\" r=\"7\" fill=\"#1f242c\" stroke=\"#4a5568\" />\n  </g>\n</svg>"
  },
  "ROW": {
    "mediaUrl": "assets/exercises/row.gif",
    "name": "Remo / Espalda Alta y Dorsales",
    "primaryMuscles": "Dorsal Ancho (Latissimus Dorsi) & Romboides",
    "secondaryMuscles": "Trapecio Medio, Deltoides Posterior y Bíceps",
    "execution": "Incliná el torso hacia adelante a 45° con la espalda derecha. Traccioná el peso hacia tu abdomen o cadera, contrayendo fuertemente los omóplatos.",
    "postureTip": "Tirá con los codos hacia atrás, no con los bíceps. No balancees el cuerpo para tomar impulso.",
    "steps": [
      "1. Posición Inicial: Torso inclinado a 45 grados con la columna recta, rodillas semi-flexionadas para dar estabilidad.",
      "2. Trayectoria: Llevá los codos hacia tus costillas y cadera (no hacia los hombros).",
      "3. Contracción: En el punto más alto, apretá tu espalda alta como si apretaras un lápiz entre tus escápulas durante 1 segundo.",
      "4. Descenso: Bajá el peso estirando los brazos con total control sin dejar que los hombros caigan hacia adelante."
    ],
    "breathing": "Exhalá al tirar del peso hacia tu cuerpo; inhalá al regresar de forma suave y controlada.",
    "commonMistakes": [
      "Usar impulso de la cadera o tirar de golpe con la espalda baja.",
      "Llevar los codos demasiado arriba hacia las orejas encogiendo el cuello.",
      "No estirar completamente los brazos al final de cada repetición."
    ],
    "equipment": {
      "dumbbells": "Remo a dos manos o apoyando una rodilla y mano en un banco/silla (Remo Unilateral).",
      "barbell": "Remo con barra inclinado con agarre en pronación o supinación hacia la boca del estómago.",
      "kettlebell": "Remo unilateral con pesa rusa manteniendo la espalda plana.",
      "bodyweight": "Remo invertido colocándote debajo de una mesa firme y traccionando el pecho hacia el borde."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Floor -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"110\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"75\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Posterior Back Anatomy -->\n  <g class=\"anat-back-base\">\n    <!-- Back of Head & Neck -->\n    <circle cx=\"160\" cy=\"58\" r=\"14\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <!-- Trapezius Diamond -->\n    <path d=\"M160 72 L185 96 L160 130 L135 96 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n\n    <!-- TARGET MUSCLES: LATISSIMUS DORSI & RHOMBOIDS (Glowing Orange V-Taper) -->\n    <g class=\"anim-row-lats\">\n      <!-- Left Lat -->\n      <path class=\"anat-active-muscle\" d=\"M136 98 C120 106 112 128 122 165 C132 172 148 160 156 130 Z\" />\n      <path class=\"anat-fiber-line\" d=\"M124 114 Q136 128 152 136\" />\n      <path class=\"anat-fiber-line\" d=\"M122 132 Q134 144 150 150\" />\n      <!-- Right Lat -->\n      <path class=\"anat-active-muscle\" d=\"M184 98 C200 106 208 128 198 165 C188 172 172 160 164 130 Z\" />\n      <path class=\"anat-fiber-line\" d=\"M196 114 Q184 128 168 136\" />\n      <path class=\"anat-fiber-line\" d=\"M198 132 Q186 144 170 150\" />\n    </g>\n\n    <!-- Lower Back (Erector Spinae) & Glutes -->\n    <path d=\"M145 165 L175 165 L180 200 L140 200 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#2d3748\" />\n    <path d=\"M132 200 Q160 212 188 200 L196 234 Q160 240 124 234 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <!-- Hamstrings & Legs -->\n    <path d=\"M130 234 L122 272 L144 272 L150 234 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <path d=\"M190 234 L198 272 L176 272 L170 234 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n  </g>\n\n  <!-- Animated Arms & Dumbbells Pulling Upwards -->\n  <g class=\"anim-row-arms\">\n    <!-- Posterior Deltoid (Secondary Highlight) -->\n    <circle cx=\"110\" cy=\"102\" r=\"13\" class=\"anat-active-secondary\" />\n    <circle cx=\"210\" cy=\"102\" r=\"13\" class=\"anat-active-secondary\" />\n\n    <!-- Forearms and pulling hands -->\n    <path d=\"M110 102 L98 140 L112 144 L120 110 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <path d=\"M210 102 L222 140 L208 144 L200 110 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n\n    <!-- Dumbbells -->\n    <rect x=\"80\" y=\"136\" width=\"34\" height=\"12\" rx=\"3\" fill=\"url(#chromeSteel)\" stroke=\"#111\" stroke-width=\"1.2\" />\n    <rect x=\"76\" y=\"130\" width=\"42\" height=\"5\" rx=\"2\" fill=\"#1f242c\" />\n    <rect x=\"76\" y=\"148\" width=\"42\" height=\"5\" rx=\"2\" fill=\"#1f242c\" />\n\n    <rect x=\"206\" y=\"136\" width=\"34\" height=\"12\" rx=\"3\" fill=\"url(#chromeSteel)\" stroke=\"#111\" stroke-width=\"1.2\" />\n    <rect x=\"202\" y=\"130\" width=\"42\" height=\"5\" rx=\"2\" fill=\"#1f242c\" />\n    <rect x=\"202\" y=\"148\" width=\"42\" height=\"5\" rx=\"2\" fill=\"#1f242c\" />\n  </g>\n</svg>"
  },
  "LUNGE": {
    "mediaUrl": "assets/exercises/lunge.gif",
    "name": "Zancada / Estocada (Lunge)",
    "primaryMuscles": "Cuádriceps & Glúteo Mayor (Trabajo Unilateral)",
    "secondaryMuscles": "Isquiotibiales, Aductores y Estabilizadores del Tobillo",
    "execution": "Da un paso amplio hacia adelante. Descendé el cuerpo de forma vertical hasta que la rodilla trasera quede a centímetros del suelo y ambas piernas formen 90 grados.",
    "postureTip": "El torso se mantiene erguido y el pie delantero completamente apoyado empujando con el talón.",
    "steps": [
      "1. Posición Inicial: De pie, pies al ancho de caderas, mirada al frente y manos en la cintura o sosteniendo peso.",
      "2. El Paso: Da un paso largo hacia adelante asegurando que el pie caiga firme y alineado.",
      "3. La Bajada: Bajá la cadera verticalmente (no hacia adelante) hasta que la rodilla de atrás casi toque el suelo.",
      "4. La Subida: Empujá fuertemente con el talón de la pierna delantera para regresar a la posición inicial."
    ],
    "breathing": "Inhalá al dar el paso y bajar; exhalá al empujar hacia atrás para regresar de pie.",
    "commonMistakes": [
      "Paso demasiado corto, provocando que la rodilla delantera sobrepase demasiado los dedos del pie con dolor.",
      "Inclinar el torso excesivamente hacia adelante.",
      "Golpear la rodilla trasera contra el suelo."
    ],
    "equipment": {
      "dumbbells": "Sostené una mancuerna a cada lado de tus muslos con los brazos relajados.",
      "barbell": "Colocá la barra sobre los trapecios (requiere gran balance).",
      "kettlebell": "Sostené la pesa rusa en posición de copa (Goblet) pegada al pecho.",
      "bodyweight": "Hacé zancadas caminando o hacia atrás (reverse lunges) con manos en la cintura."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Floor -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"110\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"75\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Kinetic Lunge Body (anim-lunge-body) -->\n  <g class=\"anim-lunge-body\">\n    <!-- Torso & Head -->\n    <circle cx=\"160\" cy=\"65\" r=\"14\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <path d=\"M140 85 L180 85 L174 150 L146 150 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n\n    <!-- Back Leg (Descending to 90 degrees) -->\n    <path d=\"M148 150 L115 195 L112 245 L128 245 L130 200 L156 155 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <rect x=\"106\" y=\"242\" width=\"28\" height=\"7\" rx=\"2\" fill=\"#1f242c\" />\n\n    <!-- TARGET MUSCLES: FRONT QUADRICEPS & GLUTEUS (Glowing Orange) -->\n    <!-- Gluteus -->\n    <path class=\"anat-active-secondary\" d=\"M152 145 C168 150 178 165 174 185 C164 190 154 180 150 165 Z\" />\n    <!-- Front Quad (90 degree angle) -->\n    <g>\n      <path class=\"anat-active-muscle\" d=\"M165 155 C190 162 208 185 210 205 C202 210 188 200 174 185 C166 175 162 165 165 155 Z\" />\n      <path class=\"anat-fiber-line\" d=\"M172 165 Q190 180 202 196\" />\n      <path class=\"anat-fiber-line\" d=\"M178 172 Q194 188 204 202\" />\n    </g>\n\n    <!-- Front Shin & Foot -->\n    <path d=\"M210 205 L204 265 L222 265 L226 205 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <rect x=\"200\" y=\"262\" width=\"34\" height=\"8\" rx=\"2\" fill=\"#1f242c\" />\n  </g>\n</svg>"
  },
  "CORE": {
    "mediaUrl": "assets/exercises/core.gif",
    "name": "Plancha & Core Abdominal",
    "primaryMuscles": "Recto Abdominal (Six-Pack) & Transverso Profundo",
    "secondaryMuscles": "Oblicuos, Glúteos y Serrato Anterior",
    "execution": "Colocate boca abajo apoyado en los antebrazos y las puntas de los pies. Mantené el cuerpo perfectamente recto y contraé el abdomen con firmeza sin dejar caer la cadera.",
    "postureTip": "Apretá los glúteos y meté el ombligo hacia la columna vertebral. Respirá de forma continua.",
    "steps": [
      "1. Posición Inicial: Apoyá los antebrazos en el suelo con los codos directamente debajo de tus hombros.",
      "2. Alineación: Estirá las piernas apoyando las puntas de los pies. Alineá tobillos, rodillas, cadera y hombros.",
      "3. Tensión Activa: Empujá el suelo con los codos para separar los omóplatos y apretá los glúteos al máximo.",
      "4. Mantenimiento: Sostené la posición respirando despacio sin permitir que la espalda baja se arquee."
    ],
    "breathing": "Respirá de forma corta y controlada por la nariz y boca sin aflojar la tensión abdominal ni aguantar el aire.",
    "commonMistakes": [
      "Dejar caer la cadera hacia el piso arqueando la cintura (causa dolor lumbar).",
      "Subir la cola demasiado arriba pareciendo una carpa.",
      "Contener la respiración (apnea) aumentando la presión innecesariamente."
    ],
    "equipment": {
      "dumbbells": "Hacé planchas con remo alternado (Renegade Row) apoyando las manos en las mancuernas.",
      "barbell": "Hacé rodillo abdominal (Ab Wheel Rollout) usando una barra con discos pequeños.",
      "kettlebell": "Hacé paseos de granjero o planchas laterales con peso.",
      "bodyweight": "Plancha clásica, plancha lateral, o bicicleta abdominal en colchoneta."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Floor -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"110\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"75\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Plank Athletic Body (Horizontal Line of Power) -->\n  <g class=\"anat-plank-figure\">\n    <!-- Forearms on ground -->\n    <path d=\"M230 200 L230 240 L218 240 L218 200 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <circle cx=\"224\" cy=\"242\" r=\"6\" fill=\"#1f242c\" />\n\n    <!-- Head & Neck -->\n    <circle cx=\"248\" cy=\"180\" r=\"13\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    \n    <!-- Spine & Upper Back Line -->\n    <path d=\"M234 186 L90 226 L94 238 L230 200 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#2d3748\" />\n\n    <!-- Legs & Feet on toes -->\n    <path d=\"M94 226 L48 240 L44 246 L58 248 L100 234 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <circle cx=\"48\" cy=\"248\" r=\"5\" fill=\"#1f242c\" />\n\n    <!-- TARGET MUSCLES: RECTUS ABDOMINIS & OBLIQUES (Glowing Orange Electric Tension) -->\n    <g class=\"anim-core-muscles\">\n      <!-- 6-Pack Segments Glowing in Orange -->\n      <rect x=\"180\" y=\"196\" width=\"18\" height=\"12\" rx=\"3\" class=\"anat-active-muscle\" />\n      <rect x=\"156\" y=\"202\" width=\"18\" height=\"12\" rx=\"3\" class=\"anat-active-muscle\" />\n      <rect x=\"132\" y=\"208\" width=\"18\" height=\"12\" rx=\"3\" class=\"anat-active-muscle\" />\n      <!-- Lower deep core & Obliques -->\n      <path class=\"anat-active-secondary\" d=\"M128 210 Q160 200 200 192 L198 204 Q160 212 126 220 Z\" />\n    </g>\n\n    <!-- Electric Energy Core Waves -->\n    <circle cx=\"162\" cy=\"204\" r=\"24\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"1.5\" opacity=\"0.6\" stroke-dasharray=\"4 4\" />\n    <circle cx=\"162\" cy=\"204\" r=\"38\" fill=\"none\" stroke=\"var(--accent-light)\" stroke-width=\"1\" opacity=\"0.3\" />\n  </g>\n</svg>"
  },
  "SHOULDER": {
    "mediaUrl": "assets/exercises/shoulder.gif",
    "name": "Press de Hombros (Shoulder Press)",
    "primaryMuscles": "Deltoides (Cabezas Anterior y Lateral)",
    "secondaryMuscles": "Tríceps Braquial, Trapecio Superior y Core",
    "execution": "Empujá el peso desde la altura de tus clavículas verticalmente hacia arriba hasta extender los brazos sobre tu cabeza, luego bajá de forma controlada.",
    "postureTip": "Mantené el abdomen bien apretado para no arquear la espalda hacia atrás al subir el peso.",
    "steps": [
      "1. Posición Inicial: De pie o sentado, sostené el peso a la altura de tus hombros con los codos apuntando ligeramente hacia adelante.",
      "2. El Empuje: Empujá hacia el techo en línea recta, pasando el peso justo por delante de tu cara.",
      "3. Bloqueo Seguro: En la parte alta, extendé los brazos alineando el peso sobre tu cabeza y orejas.",
      "4. Descenso Controlado: Bajá el peso lentamente resistiendo la gravedad hasta volver a la altura de las clavículas."
    ],
    "breathing": "Inhalá antes de empujar; exhalá con potencia mientras subís el peso por encima de la cabeza.",
    "commonMistakes": [
      "Arquear excesivamente la espalda baja para compensar la falta de fuerza en los hombros.",
      "Llevar los codos demasiado abiertos hacia atrás provocando pinzamiento en el hombro.",
      "Bajar el peso de golpe sin controlar la fase excéntrica."
    ],
    "equipment": {
      "dumbbells": "Press militar con mancuernas sentado o de pie con agarre prono o neutro.",
      "barbell": "Press militar estricto con barra por delante del mentón.",
      "kettlebell": "Press a una mano con pesa rusa girando suavemente la muñeca.",
      "bodyweight": "Flexiones en pino (Handstand pushups) o Pike Pushups con los pies elevados en una silla."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Floor -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"110\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"75\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Torso & Lower Body -->\n  <g class=\"anat-torso-base\">\n    <!-- Head & Neck -->\n    <circle cx=\"160\" cy=\"62\" r=\"14\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <path d=\"M152 76 L148 94 L172 94 L168 76 Z\" fill=\"url(#anatDarkShadow)\" stroke=\"#2d3748\" />\n\n    <!-- Trapezius (Secondary Target) -->\n    <path class=\"anat-active-secondary\" d=\"M136 92 Q160 84 184 92 L198 110 L122 110 Z\" />\n\n    <!-- Chest & Core -->\n    <path d=\"M124 108 Q160 114 196 108 L188 142 Q160 150 132 142 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <!-- Abs -->\n    <rect x=\"146\" y=\"150\" width=\"12\" height=\"14\" rx=\"2\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" />\n    <rect x=\"162\" y=\"150\" width=\"12\" height=\"14\" rx=\"2\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" />\n    <rect x=\"146\" y=\"168\" width=\"12\" height=\"14\" rx=\"2\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" />\n    <rect x=\"162\" y=\"168\" width=\"12\" height=\"14\" rx=\"2\" fill=\"url(#anatSlateMuscle)\" stroke=\"#1a202c\" />\n    <!-- Legs -->\n    <path d=\"M138 210 L132 272 L150 272 L154 210 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n    <path d=\"M182 210 L188 272 L170 272 L166 210 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#2d3748\" />\n  </g>\n\n  <!-- Animated Arms with Overhead Dumbbells (anim-shoulder-arms) -->\n  <g class=\"anim-shoulder-arms\">\n    <!-- TARGET MUSCLES: DELTOIDS (Anterior, Lateral & Posterior Heads Glowing Orange) -->\n    <!-- Left Deltoid -->\n    <g>\n      <circle cx=\"112\" cy=\"116\" r=\"16\" class=\"anat-active-muscle\" />\n      <path class=\"anat-fiber-line\" d=\"M102 114 Q112 120 122 114\" />\n      <path class=\"anat-fiber-line\" d=\"M104 122 Q112 126 120 122\" />\n    </g>\n    <!-- Right Deltoid -->\n    <g>\n      <circle cx=\"208\" cy=\"116\" r=\"16\" class=\"anat-active-muscle\" />\n      <path class=\"anat-fiber-line\" d=\"M198 114 Q208 120 218 114\" />\n      <path class=\"anat-fiber-line\" d=\"M200 122 Q208 126 216 122\" />\n    </g>\n\n    <!-- Forearms & Dumbbells Pressing Upward -->\n    <path d=\"M104 116 L88 74 L104 70 L118 114 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <path d=\"M216 116 L232 74 L216 70 L202 114 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n\n    <!-- Left Dumbbell -->\n    <rect x=\"70\" y=\"62\" width=\"36\" height=\"12\" rx=\"3\" fill=\"url(#chromeSteel)\" stroke=\"#111\" stroke-width=\"1.2\" />\n    <rect x=\"66\" y=\"56\" width=\"44\" height=\"6\" rx=\"2\" fill=\"#1f242c\" />\n    <rect x=\"66\" y=\"74\" width=\"44\" height=\"6\" rx=\"2\" fill=\"#1f242c\" />\n\n    <!-- Right Dumbbell -->\n    <rect x=\"214\" y=\"62\" width=\"36\" height=\"12\" rx=\"3\" fill=\"url(#chromeSteel)\" stroke=\"#111\" stroke-width=\"1.2\" />\n    <rect x=\"210\" y=\"56\" width=\"44\" height=\"6\" rx=\"2\" fill=\"#1f242c\" />\n    <rect x=\"210\" y=\"74\" width=\"44\" height=\"6\" rx=\"2\" fill=\"#1f242c\" />\n  </g>\n</svg>"
  },
  "CALVES": {
    "mediaUrl": "assets/exercises/calves.gif",
    "name": "Gemelos / Elevación de Talones",
    "primaryMuscles": "Gastrocnemio (Gemelos Interno y Externo)",
    "secondaryMuscles": "Sóleo, Tendón de Aquiles y Flexores del Pie",
    "execution": "Apoyate en la punta de los pies y elevá los talones lo más alto posible contrayendo los gemelos durante 1 segundo, luego descendé lentamente.",
    "postureTip": "No rebotes en la parte inferior; hacé una pausa arriba y otra abajo para trabajar el músculo y no los tendones.",
    "steps": [
      "1. Posición Inicial: Apoyá el metatarso (la parte delantera de los pies) en el borde de un escalón o en el suelo plano.",
      "2. Elevación Máxima: Subí lo más alto que puedas como si quisieras ponerte en puntas de pie al extremo.",
      "3. Pico de Contracción: Apretá los gemelos fuertemente en el punto más alto durante 1 segundo completo.",
      "4. Estiramiento: Bajá con lentitud hasta sentir un estiramiento agradable en la pantorrilla."
    ],
    "breathing": "Exhalá al subir en puntas de pie; inhalá al bajar con control.",
    "commonMistakes": [
      "Hacer rebotes rápidos sin controlar la subida ni la bajada.",
      "Doblar las rodillas en exceso quitando trabajo al gemelo.",
      "No subir al punto más alto por falta de rango articular."
    ],
    "equipment": {
      "dumbbells": "Sostené una mancuerna pesada con una mano mientras te afirmás con la otra en una pared.",
      "barbell": "Elevaciones de talón con barra sobre los hombros.",
      "kettlebell": "Sostené una pesa rusa con el brazo del mismo lado que la pierna que trabaja.",
      "bodyweight": "Elevaciones a una sola pierna en el escalón de una escalera para máximo rango."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Floor -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"110\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"75\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Knee Joint & Thigh Base -->\n  <path d=\"M140 60 L180 60 L174 110 L146 110 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n  <circle cx=\"160\" cy=\"112\" r=\"10\" fill=\"#2d3748\" stroke=\"#4a5568\" />\n\n  <!-- Animated Gastrocnemius & Heel Lift (anim-calves-heel) -->\n  <g class=\"anim-calves-heel\">\n    <!-- TARGET MUSCLES: GASTROCNEMIUS & SOLEUS (Diamond Glowing Orange Calves) -->\n    <!-- Medial Head (Gemelo Interno) -->\n    <path class=\"anat-active-muscle\" d=\"M160 115 C142 120 134 145 138 180 C144 195 155 198 160 192 Z\" />\n    <path class=\"anat-fiber-line\" d=\"M144 135 Q142 155 148 178\" />\n    <path class=\"anat-fiber-line\" d=\"M152 138 Q150 160 154 182\" />\n\n    <!-- Lateral Head (Gemelo Externo) -->\n    <path class=\"anat-active-muscle\" d=\"M160 115 C178 120 186 145 182 180 C176 195 165 198 160 192 Z\" />\n    <path class=\"anat-fiber-line\" d=\"M176 135 Q178 155 172 178\" />\n    <path class=\"anat-fiber-line\" d=\"M168 138 Q170 160 166 182\" />\n\n    <!-- Achilles Tendon (Silver/White anatomical tendon) -->\n    <path d=\"M154 190 L153 246 L167 246 L166 190 Z\" fill=\"#d0d7de\" stroke=\"#8b949e\" stroke-width=\"1.2\" />\n\n    <!-- Foot & Rising Heel -->\n    <path d=\"M152 244 L138 266 L174 266 L168 244 Z\" fill=\"#1f242c\" stroke=\"#4a5568\" stroke-width=\"1.5\" />\n    <!-- Ball of Foot (Pivot on ground) -->\n    <circle cx=\"156\" cy=\"268\" r=\"8\" fill=\"var(--accent)\" opacity=\"0.8\" />\n  </g>\n</svg>"
  },
  "CARDIO": {
    "mediaUrl": "assets/exercises/burpee.gif",
    "name": "Cardio y Resistencia Metabólica",
    "primaryMuscles": "Sistema Cardiovascular & Resistencia de Cuerpo Completo",
    "secondaryMuscles": "Glúteos, Pantorrillas, Cuádriceps y Hombros",
    "execution": "Realizá movimientos cíclicos continuos u ejercicios pliométricos de manera explosiva para elevar las pulsaciones y el gasto calórico.",
    "postureTip": "Amortiguá los saltos cayendo suavemente con la punta del pie antes del talón para proteger las rodillas.",
    "steps": [
      "1. Posición Inicial: Pies al ancho de hombros, rodillas suaves y brazos listos para moverse coordinadamente.",
      "2. Impulso Explosivo: Saltá abriendo brazos y piernas (Jumping Jack) o bajá al piso a posición de plancha (Burpee).",
      "3. Aterrizaje Suave: Caé siempre flexionando levemente las articulaciones para absorber el impacto con los músculos y no con los huesos.",
      "4. Cadencia Rítmica: Buscá un ritmo constante que puedas sostener durante todo el tiempo indicado."
    ],
    "breathing": "Respirá por la nariz y boca rítmicamente sin hiperventilar.",
    "commonMistakes": [
      "Caer con las piernas rígidas o talones de golpe transmitiendo el impacto a la columna.",
      "Comenzar demasiado rápido y agotarse en los primeros 15 segundos.",
      "Perder la postura y encorvar la espalda durante los burpees."
    ],
    "equipment": {
      "dumbbells": "Hacé Thrusters (sentadilla más press de hombro continuo) con mancuernas livianas.",
      "barbell": "Hacé Thrusters con barra vacía o peso ligero.",
      "kettlebell": "Realizá balanceos de pesa rusa (Kettlebell Swings) a dos manos.",
      "bodyweight": "Saltar la cuerda imaginaria, Jumping Jacks veloces o Mountain Climbers."
    },
    "svg": "<svg viewBox=\"0 0 320 320\" class=\"svg-exercise-avatar\" xmlns=\"http://www.w3.org/2000/svg\">\n  \n  <defs>\n    <!-- Glowing Orange Target Muscle Fill -->\n    <radialGradient id=\"muscleGlowOrange\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffa040\" />\n      <stop offset=\"35%\" stop-color=\"#ff6a00\" />\n      <stop offset=\"80%\" stop-color=\"#d94800\" />\n      <stop offset=\"100%\" stop-color=\"#9e2800\" />\n    </radialGradient>\n\n    <!-- Secondary Synergist Muscle (Coral / Amber) -->\n    <radialGradient id=\"muscleGlowSecondary\" cx=\"45%\" cy=\"40%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#ffb870\" />\n      <stop offset=\"50%\" stop-color=\"#ff7b1a\" />\n      <stop offset=\"100%\" stop-color=\"#b84500\" />\n    </radialGradient>\n\n    <!-- Metallic Anatomical Inactive Muscle (Charcoal / Slate Shading) -->\n    <radialGradient id=\"anatSlateMuscle\" cx=\"40%\" cy=\"35%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#4a5568\" />\n      <stop offset=\"50%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#1a202c\" />\n    </radialGradient>\n\n    <!-- Deep Shading for Grooves & Core -->\n    <linearGradient id=\"anatDarkShadow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2d3748\" />\n      <stop offset=\"100%\" stop-color=\"#14171d\" />\n    </linearGradient>\n\n    <!-- Chrome & Metal for Weights & Equipment -->\n    <linearGradient id=\"chromeSteel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\" />\n      <stop offset=\"40%\" stop-color=\"#a0aec0\" />\n      <stop offset=\"70%\" stop-color=\"#4a5568\" />\n      <stop offset=\"100%\" stop-color=\"#2d3748\" />\n    </linearGradient>\n\n    <!-- Soft Muscle Glow Filter -->\n    <filter id=\"muscleDropGlow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"4\" result=\"blur\" />\n      <feMerge>\n        <feMergeNode in=\"blur\" />\n        <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n  </defs>\n\n  <!-- 3D Stage Floor -->\n  <ellipse cx=\"160\" cy=\"275\" rx=\"110\" ry=\"24\" class=\"anat-stage-floor\" />\n  <ellipse cx=\"160\" cy=\"275\" rx=\"75\" ry=\"16\" class=\"anat-stage-ring\" />\n\n  <!-- Cardiovascular Radiating Rings -->\n  <circle cx=\"160\" cy=\"140\" r=\"30\" fill=\"none\" stroke=\"var(--accent)\" class=\"cardio-ring-anim\" />\n  <circle cx=\"160\" cy=\"140\" r=\"50\" fill=\"none\" stroke=\"var(--accent-light)\" class=\"cardio-ring-anim\" style=\"animation-delay: 0.6s;\" />\n\n  <!-- Dynamic Athletic Full Body Silhouette in Motion -->\n  <g class=\"anat-cardio-athlete\">\n    <!-- Head -->\n    <circle cx=\"160\" cy=\"68\" r=\"14\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n\n    <!-- Muscular Torso with Metabolic Core Glow -->\n    <path d=\"M136 88 Q160 82 184 88 L194 140 Q160 148 126 140 Z\" class=\"anat-active-muscle\" />\n\n    <!-- Heartbeat symbol -->\n    <path d=\"M160 115 C156 105 142 105 142 118 C142 130 160 142 160 142 C160 142 178 130 178 118 C178 105 164 105 160 115 Z\" fill=\"#fff\" filter=\"drop-shadow(0 0 8px #ff6b00)\" />\n\n    <!-- Open Jumping Jacks Arms -->\n    <path d=\"M136 92 L94 54 L84 62 L128 104 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n    <path d=\"M184 92 L226 54 L236 62 L192 104 Z\" fill=\"url(#anatSlateMuscle)\" stroke=\"#4a5568\" />\n\n    <!-- Open Jumping Legs -->\n    <path d=\"M138 140 L96 230 L112 234 L152 144 Z\" class=\"anat-active-secondary\" />\n    <path d=\"M182 140 L224 230 L208 234 L168 144 Z\" class=\"anat-active-secondary\" />\n    <rect x=\"88\" y=\"230\" width=\"28\" height=\"8\" rx=\"2\" fill=\"#1f242c\" />\n    <rect x=\"204\" y=\"230\" width=\"28\" height=\"8\" rx=\"2\" fill=\"#1f242c\" />\n  </g>\n</svg>"
  }
};

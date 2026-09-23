import type { Child, DayKey, HelpCard, Task, WeekDay } from '@/lib/types';

/* --------------------------------------------------------------------------
   The week — Monday 21 to Friday 25 September, Monday is today
   -------------------------------------------------------------------------- */

export const WEEK_DAYS: WeekDay[] = [
  { key: 'mon', short: 'Mon', long: 'Monday 21', isToday: true },
  { key: 'tue', short: 'Tue', long: 'Tuesday 22', isToday: false },
  { key: 'wed', short: 'Wed', long: 'Wednesday 23', isToday: false },
  { key: 'thu', short: 'Thu', long: 'Thursday 24', isToday: false },
  { key: 'fri', short: 'Fri', long: 'Friday 25', isToday: false },
];

/* --------------------------------------------------------------------------
   Children and their homework
   -------------------------------------------------------------------------- */

const MAYA_TASKS: Task[] = [
  {
    id: 'm4',
    subject: 'History',
    title: 'Source questions: the Home Front',
    night: 'mon',
    due: 'Fri 18 Sep',
    dueRelative: 'Was due Friday',
    minutes: 30,
    status: 'overdue',
    setBy: 'Mr Hughes',
    instructions:
      'Look at Source A (a 1941 poster) and Source B (a diary entry).\nFor each one, say who made it, when, and why.\nThen answer: which source is more useful for learning about rationing? Give two reasons.',
  },
  {
    id: 'm1',
    subject: 'Maths',
    title: 'Adding fractions',
    night: 'mon',
    due: 'Tue 22 Sep',
    dueRelative: 'Due tomorrow',
    minutes: 25,
    status: 'todo',
    setBy: 'Mr Patel',
    instructions:
      'Exercise 7.3, questions 1 to 12.\nAdd the fractions. Show your working with a bar model or by making the bottom numbers the same.\nWrite your answers in your book, then take a photo and hand it in.',
  },
  {
    id: 'm2',
    subject: 'French',
    title: 'Vocab: school subjects',
    night: 'tue',
    due: 'Wed 23 Sep',
    dueRelative: 'Due Wednesday',
    minutes: 15,
    status: 'todo',
    setBy: 'Mme Laurent',
    instructions:
      'Learn the 12 words on the sheet. Say them out loud.\nThere is a short quiz in class on Wednesday.',
  },
  {
    id: 'm3',
    subject: 'English',
    title: 'Read chapter 4 of your class novel',
    night: 'tue',
    due: 'Thu 24 Sep',
    dueRelative: 'Due Thursday',
    minutes: 20,
    status: 'started',
    setBy: 'Ms Byrne',
    instructions:
      'Read chapter 4.\nWrite down one quote that shows how a character is feeling, and one sentence explaining why you chose it.',
  },
  {
    id: 'm5',
    subject: 'Science',
    title: 'Write-up: rates of reaction',
    night: 'wed',
    due: 'Thu 24 Sep',
    dueRelative: 'Due Thursday',
    minutes: 30,
    status: 'todo',
    setBy: 'Dr Shah',
    instructions:
      'Use your results table from the lesson.\nWrite your method, what you found, and whether your prediction was right.\nUse the writing frame on the task sheet.',
  },
  {
    id: 'm8',
    subject: 'Geography',
    title: 'Map skills: grid references',
    night: 'thu',
    due: 'Fri 25 Sep',
    dueRelative: 'Due Friday',
    minutes: 20,
    status: 'todo',
    setBy: 'Ms Okafor',
    instructions:
      'Answer the 10 grid reference questions on the worksheet.\nUse four-figure grid references, then try the six-figure challenge.',
  },
  {
    id: 'm6',
    subject: 'Maths',
    title: 'Times tables check',
    night: 'done',
    due: 'Fri 18 Sep',
    dueRelative: '—',
    minutes: 10,
    status: 'marked',
    setBy: 'Mr Patel',
    instructions:
      "Practise your times tables using the sheet.\nThere is a 50-question check in Friday's lesson.",
    mark: 'Secure',
    markedOn: 'Fri',
    wentWell: 'Maya got 46 out of 50 right and was quick on her 7s and 8s.',
    nextStep:
      'She slipped on 6 × 7 and 7 × 8. Practising just those two will make the next check easy.',
    homeTip:
      "Try three quick questions on the way to school. Keep it light: it's about speed, not pressure.",
  },
  {
    id: 'm7',
    subject: 'Geography',
    title: 'Climate graph for Manaus',
    night: 'done',
    due: 'Thu 17 Sep',
    dueRelative: '—',
    minutes: 25,
    status: 'marked',
    setBy: 'Ms Okafor',
    instructions: 'Draw a climate graph for Manaus using the data table.',
    mark: 'Getting there',
    markedOn: 'Thu',
    wentWell: 'Maya plotted the rainfall bars accurately.',
    nextStep:
      'She drew temperature as bars too. A climate graph uses bars for rainfall and a line for temperature.',
    homeTip:
      "A weather app's monthly averages make a good real example to talk through together.",
  },
];

const SAM_TASKS: Task[] = [
  {
    id: 's1',
    subject: 'Science',
    title: 'Label a plant cell',
    night: 'mon',
    due: 'Tue 22 Sep',
    dueRelative: 'Due tomorrow',
    minutes: 15,
    status: 'todo',
    setBy: 'Dr Shah',
    instructions:
      'Label the 5 parts of the plant cell on the sheet.\nWrite one sentence about what each part does.',
  },
  {
    id: 's2',
    subject: 'English',
    title: 'Spelling practice: list 3',
    night: 'mon',
    due: 'Wed 23 Sep',
    dueRelative: 'Due Wednesday',
    minutes: 10,
    status: 'handed-in',
    setBy: 'Ms Byrne',
    instructions: 'Practise the 10 words using look, cover, write, check.',
  },
  {
    id: 's3',
    subject: 'Maths',
    title: 'Adding and subtracting negative numbers',
    night: 'tue',
    due: 'Wed 23 Sep',
    dueRelative: 'Due Wednesday',
    minutes: 20,
    status: 'todo',
    setBy: 'Mr Patel',
    instructions:
      'Answer questions 1 to 15 on the sheet.\nUse the number line at the top of the page to help you.',
  },
  {
    id: 's4',
    subject: 'French',
    title: 'Numbers 1 to 30',
    night: 'wed',
    due: 'Thu 24 Sep',
    dueRelative: 'Due Thursday',
    minutes: 15,
    status: 'todo',
    setBy: 'Mme Laurent',
    instructions:
      'Learn numbers 1 to 30. Practise saying them out loud and writing them.',
  },
  {
    id: 's5',
    subject: 'History',
    title: 'Castle design poster',
    night: 'thu',
    due: 'Fri 25 Sep',
    dueRelative: 'Due Friday',
    minutes: 30,
    status: 'todo',
    setBy: 'Mr Hughes',
    instructions:
      'Design a motte and bailey castle.\nLabel 4 features and say how each one helped defend it.',
  },
  {
    id: 's6',
    subject: 'Maths',
    title: 'Place value quiz',
    night: 'done',
    due: 'Fri 18 Sep',
    dueRelative: '—',
    minutes: 15,
    status: 'marked',
    setBy: 'Mr Patel',
    instructions: 'Complete the 20-question place value quiz online.',
    mark: 'Excellent',
    markedOn: 'Fri',
    wentWell:
      'Sam got every question right, including the challenge on rounding decimals.',
    nextStep: 'Try the stretch questions on ordering negative numbers next.',
    homeTip:
      'Ask him to explain rounding to you. Teaching it back is great practice.',
  },
  {
    id: 's7',
    subject: 'Science',
    title: 'Lab safety quiz',
    night: 'done',
    due: 'Thu 17 Sep',
    dueRelative: '—',
    minutes: 10,
    status: 'marked',
    setBy: 'Dr Shah',
    instructions: 'Complete the lab safety quiz.',
    mark: 'Secure',
    markedOn: 'Thu',
    wentWell: 'Sam knew all the hazard symbols.',
    nextStep:
      'Revise what to do if something spills. He mixed up two of the steps.',
    homeTip:
      'The sheet in his bag has the steps in order. Reading it together takes two minutes.',
  },
];

export const CHILDREN: Child[] = [
  {
    id: 'maya',
    name: 'Maya',
    yearGroup: 'Year 9',
    yearShort: 'Y9',
    nightlyGuide: 70,
    tasks: MAYA_TASKS,
  },
  {
    id: 'sam',
    name: 'Sam',
    yearGroup: 'Year 7',
    yearShort: 'Y7',
    nightlyGuide: 45,
    tasks: SAM_TASKS,
  },
];

/* --------------------------------------------------------------------------
   "How to help" cards — one per trickier task
   -------------------------------------------------------------------------- */

export const HELP_CARDS: HelpCard[] = [
  {
    taskId: 'm1',
    subject: 'Maths',
    title: 'Adding fractions',
    about:
      'Adding fractions where the bottom numbers are different, like 1/3 + 1/4.',
    thenText:
      'A rule to memorise: find the lowest common denominator, then cross-multiply.',
    nowText:
      'Drawing fractions as bars (a "bar model") to see why the pieces must be the same size before adding.',
    why: 'Seeing why the rule works leads to fewer mistakes later, especially in algebra.',
    steps: [
      'Draw two bars the same length. Shade 1/3 of one and 1/4 of the other.',
      'Split both bars into pieces of the same size. Twelfths work for both.',
      'Count the shaded pieces: 1/3 is 4/12 and 1/4 is 3/12.',
      'Add the pieces: 4/12 + 3/12 = 7/12. Only the top numbers add.',
    ],
    asks: [
      'Can you draw it as bars?',
      'Are the pieces the same size yet?',
      'What could you multiply both bottom numbers by?',
    ],
    dontWorry:
      "Your way isn't wrong. It just isn't the method she'll be marked on, so ask her to show you hers first.",
    hasBarModel: true,
  },
  {
    taskId: 'm4',
    subject: 'History',
    title: 'Source questions',
    about:
      'Using historical sources: working out who made them, when, why, and how useful they are.',
    thenText:
      'Learning the key dates and events, and writing about what happened.',
    nowText:
      'Treating sources as evidence and judging each one by its Nature, Origin and Purpose ("NOP").',
    why: 'GCSE History rewards the skill of weighing up evidence, not just knowing what happened.',
    steps: [
      'Nature: what kind of source is it? A poster, a diary, a photo?',
      'Origin: who made it, and when?',
      'Purpose: why was it made? To persuade, to record, to inform?',
      "Usefulness: what does it tell us, and what can't it tell us?",
    ],
    asks: [
      'Who do you think made this, and why?',
      'Would a government poster tell the whole story?',
      'What would you still want to know?',
    ],
    dontWorry:
      "You don't need to know anything about the Home Front. These questions work for any source.",
  },
  {
    taskId: 's3',
    subject: 'Maths',
    title: 'Negative numbers',
    about: 'Adding and subtracting numbers below zero, like −3 + 5 or 4 − (−2).',
    thenText: 'Rules to remember, like "two minuses make a plus".',
    nowText:
      'Moving along a number line, so pupils can see what each step does.',
    why: 'Pupils who can picture the number line make fewer sign mistakes when the rules get harder.',
    steps: [
      'Find the first number on the number line.',
      'Adding a positive number: move right.',
      'Subtracting a positive number: move left.',
      'Subtracting a negative is the same as adding: move right. So 4 − (−2) = 6.',
    ],
    asks: [
      'Where do you start on the number line?',
      'Which way are you moving?',
      'Does your answer look sensible?',
    ],
    dontWorry:
      'If he says "we don\'t do it that way", he\'s right to use the class method. Ask him to show you.',
  },
];

/* --------------------------------------------------------------------------
   Helpers — plain reads over the arrays above
   -------------------------------------------------------------------------- */

export function getChild(id: string): Child | undefined {
  return CHILDREN.find((child) => child.id === id);
}

export function getTask(childId: string, taskId: string): Task | undefined {
  return getChild(childId)?.tasks.find((task) => task.id === taskId);
}

export function getHelpCard(taskId: string): HelpCard | undefined {
  return HELP_CARDS.find((card) => card.taskId === taskId);
}

export function tasksForNight(child: Child, night: DayKey): Task[] {
  return child.tasks.filter((task) => task.night === night);
}

export function minutesForNight(child: Child, night: DayKey): number {
  return tasksForNight(child, night).reduce(
    (total, task) => total + task.minutes,
    0,
  );
}

export function markedTasks(child: Child): Task[] {
  return child.tasks.filter((task) => task.status === 'marked');
}

export function overdueTask(child: Child): Task | undefined {
  return child.tasks.find((task) => task.status === 'overdue');
}
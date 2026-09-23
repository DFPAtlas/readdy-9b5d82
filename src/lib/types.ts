export type Subject =
  | 'Maths'
  | 'English'
  | 'Science'
  | 'French'
  | 'History'
  | 'Geography';

export type TaskStatus =
  | 'todo'
  | 'started'
  | 'handed-in'
  | 'overdue'
  | 'marked';

export type Mark = 'Not yet' | 'Getting there' | 'Secure' | 'Excellent';

export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'done';

export interface Task {
  id: string;
  subject: Subject;
  title: string;
  night: DayKey;
  /** 'Tue 22 Sep' */
  due: string;
  /** 'Due tomorrow', 'Was due Friday' */
  dueRelative: string;
  /** estimated minutes */
  minutes: number;
  status: TaskStatus;
  /** 'Mr Patel' */
  setBy: string;
  /** may contain \n */
  instructions: string;
  mark?: Mark;
  /** 'Fri' */
  markedOn?: string;
  wentWell?: string;
  nextStep?: string;
  homeTip?: string;
}

export interface Child {
  id: string;
  name: string;
  /** 'Year 9' */
  yearGroup: string;
  /** 'Y9' */
  yearShort: string;
  /** minutes */
  nightlyGuide: number;
  tasks: Task[];
}

export interface HelpCard {
  taskId: string;
  subject: Subject;
  title: string;
  about: string;
  /** how the parent was taught */
  thenText: string;
  /** how it is taught now */
  nowText: string;
  why: string;
  steps: string[];
  /** questions to ask instead of answering */
  asks: string[];
  dontWorry: string;
  hasBarModel?: boolean;
}

export interface WeekDay {
  key: DayKey;
  /** 'Mon' */
  short: string;
  /** 'Monday 21' */
  long: string;
  isToday: boolean;
}
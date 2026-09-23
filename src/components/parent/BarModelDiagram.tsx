/**
 * The bar-model diagram for the fractions guide.
 *
 * Fixed illustration: the five hex values below are part of the drawing and
 * are deliberately kept out of the token file.
 */

const START_X = 46;
const ROW_HEIGHT = 26;

interface Row {
  label: string;
  y: number;
  cellWidth: number;
  fills: string[];
}

const BAR_TEAL = '#9ED3CC';
const BAR_AMBER = '#F8D49A';
const BAR_WHITE = '#FFFFFF';

const ROWS: Row[] = [
  {
    label: '1/3',
    y: 10,
    cellWidth: 94,
    fills: [BAR_TEAL, BAR_WHITE, BAR_WHITE],
  },
  {
    label: '1/4',
    y: 56,
    cellWidth: 70.5,
    fills: [BAR_AMBER, BAR_WHITE, BAR_WHITE, BAR_WHITE],
  },
  {
    label: '7/12',
    y: 102,
    cellWidth: 23.5,
    fills: [
      BAR_TEAL,
      BAR_TEAL,
      BAR_TEAL,
      BAR_TEAL,
      BAR_AMBER,
      BAR_AMBER,
      BAR_AMBER,
      BAR_WHITE,
      BAR_WHITE,
      BAR_WHITE,
      BAR_WHITE,
      BAR_WHITE,
    ],
  },
];

export function BarModelDiagram() {
  return (
    <svg
      width="100%"
      viewBox="0 0 330 140"
      role="img"
      aria-label="Bar model: one third is four twelfths, one quarter is three twelfths, together seven twelfths"
      className="block"
    >
      {ROWS.map((row) => (
        <g key={row.label}>
          <text
            x="2"
            y={row.y + 18}
            fill="var(--ink)"
            fontSize="14"
            fontWeight="700"
          >
            {row.label}
          </text>

          {row.fills.map((fill, index) => (
            <rect
              key={`${row.label}-${index}`}
              x={START_X + index * row.cellWidth}
              y={row.y}
              width={row.cellWidth}
              height={ROW_HEIGHT}
              fill={fill}
              stroke="#1B2A41"
              strokeWidth="1"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export default BarModelDiagram;
"use client";

const nodes = [
  { id: "code", x: 40, y: 100, label: "Code", icon: "{ }", color: "#00f5ff" },
  { id: "scan", x: 170, y: 40, label: "Scan", icon: "🔍", color: "#39ff14" },
  { id: "build", x: 300, y: 100, label: "Build", icon: "⚙️", color: "#00f5ff" },
  { id: "test", x: 170, y: 160, label: "Test", icon: "✓", color: "#39ff14" },
  { id: "deploy", x: 430, y: 60, label: "Deploy", icon: "🚀", color: "#ff2d78" },
  { id: "monitor", x: 430, y: 145, label: "Monitor", icon: "📊", color: "#ff2d78" },
  { id: "cloud", x: 555, y: 100, label: "Cloud", icon: "☁️", color: "#00f5ff" },
];

const edges = [
  { from: "code", to: "scan" },
  { from: "code", to: "build" },
  { from: "scan", to: "build" },
  { from: "build", to: "test" },
  { from: "build", to: "deploy" },
  { from: "test", to: "deploy" },
  { from: "deploy", to: "monitor" },
  { from: "deploy", to: "cloud" },
  { from: "monitor", to: "cloud" },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

const colors = ["#00f5ff", "#39ff14", "#ff2d78"];
const markers = ["arrowCyan", "arrowGreen", "arrowMagenta"];

export default function PipelineSVG() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 620 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <marker id="arrowCyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00f5ff" opacity="0.7" />
          </marker>
          <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#39ff14" opacity="0.7" />
          </marker>
          <marker id="arrowMagenta" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#ff2d78" opacity="0.7" />
          </marker>
        </defs>
        {edges.map((edge, i) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);
          const color = colors[i % 3];
          const mx = (from.x + to.x) / 2;
          const my = (from.y + to.y) / 2 - 15;
          const d = `M ${from.x + 28} ${from.y} Q ${mx} ${my} ${to.x - 28} ${to.y}`;
          return (
            <path
              key={i}
              d={d}
              stroke={color}
              strokeWidth="1.5"
              opacity="0.6"
              strokeDasharray="6 4"
              markerEnd={`url(#${markers[i % 3]})`}
              style={{ animation: "flowDash 4s linear infinite" }}
            />
          );
        })}
        {nodes.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x - 28}
              y={node.y - 22}
              width={56}
              height={44}
              rx={6}
              fill="rgba(10,10,18,0.9)"
              stroke={node.color}
              strokeWidth="1"
            />
            <text x={node.x} y={node.y - 4} textAnchor="middle" fontSize="12" fill={node.color} fontFamily="system-ui">
              {node.icon}
            </text>
            <text x={node.x} y={node.y + 12} textAnchor="middle" fontSize="7" fill={node.color} opacity={0.9} fontFamily="system-ui">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

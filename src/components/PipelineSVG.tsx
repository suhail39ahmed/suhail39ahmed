"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "code",    x: 40,  y: 100, label: "Code",     icon: "{ }" },
  { id: "scan",    x: 170, y: 40,  label: "SAST/DAST", icon: "🔍" },
  { id: "build",   x: 300, y: 100, label: "Build",     icon: "⚙️" },
  { id: "test",    x: 170, y: 160, label: "Test",      icon: "✓" },
  { id: "deploy",  x: 430, y: 60,  label: "Deploy",    icon: "🚀" },
  { id: "monitor", x: 430, y: 145, label: "Monitor",   icon: "📊" },
  { id: "cloud",   x: 555, y: 100, label: "Cloud",     icon: "☁️" },
];

const edges = [
  { from: "code",    to: "scan"    },
  { from: "code",    to: "build"   },
  { from: "scan",    to: "build"   },
  { from: "build",   to: "test"    },
  { from: "build",   to: "deploy"  },
  { from: "test",    to: "deploy"  },
  { from: "deploy",  to: "monitor" },
  { from: "deploy",  to: "cloud"   },
  { from: "monitor", to: "cloud"   },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

const colors = ["#00f5ff", "#39ff14", "#ff2d78", "#00f5ff", "#39ff14", "#ff2d78", "#00f5ff", "#39ff14", "#ff2d78"];

export default function PipelineSVG() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 620 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          {colors.map((c, i) => (
            <filter key={i} id={`glow-${i}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          ))}
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

        {/* Edges */}
        {edges.map((edge, i) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);
          const color = colors[i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2];
          const marker = i % 3 === 0 ? "arrowCyan" : i % 3 === 1 ? "arrowGreen" : "arrowMagenta";
          const mx = (from.x + to.x) / 2;
          const my = (from.y + to.y) / 2 - 15;
          return (
            <g key={i}>
              <path
                d={`M ${from.x + 28} ${from.y} Q ${mx} ${my} ${to.x - 28} ${to.y}`}
                stroke={color}
                strokeWidth="1"
                opacity="0.2"
                strokeDasharray="5 3"
              />
              <motion.path
                d={`M ${from.x + 28} ${from.y} Q ${mx} ${my} ${to.x - 28} ${to.y}`}
                stroke={color}
                strokeWidth="1.5"
                opacity="0.7"
                strokeDasharray="8 5"
                markerEnd={`url(#${marker})`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.5, delay: i * 0.15, ease: "easeInOut" }}
                style={{ strokeDashoffset: 0 }}
              />
              {/* Flowing particle */}
              <motion.circle r="2.5" fill={color} opacity="0.9">
                <animateMotion
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                  path={`M ${from.x + 28} ${from.y} Q ${mx} ${my} ${to.x - 28} ${to.y}`}
                />
              </motion.circle>
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const color = i % 3 === 0 ? "#00f5ff" : i % 3 === 1 ? "#39ff14" : "#ff2d78";
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <rect
                x={node.x - 28}
                y={node.y - 22}
                width={56}
                height={44}
                rx={6}
                fill="rgba(10,10,18,0.9)"
                stroke={color}
                strokeWidth="1"
                style={{ filter: `drop-shadow(0 0 6px ${color}40)` }}
              />
              <text
                x={node.x}
                y={node.y - 4}
                textAnchor="middle"
                fontSize="12"
                fill={color}
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
              >
                {node.icon}
              </text>
              <text
                x={node.x}
                y={node.y + 12}
                textAnchor="middle"
                fontSize="7"
                fill={color}
                fontFamily="JetBrains Mono, monospace"
                opacity="0.8"
              >
                {node.label}
              </text>
              {/* Pulse ring */}
              <motion.circle
                cx={node.x}
                cy={node.y - 2}
                r={18}
                stroke={color}
                strokeWidth="1"
                fill="none"
                opacity={0.3}
                animate={{ r: [18, 28, 18], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

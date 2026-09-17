import { useEffect, useRef } from "react";
import "./SnakeLoader.scss";

const GRID_SIZE = 20;
const CELL_SIZE = 18;
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;

const DIRECTIONS = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
];

function randomPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  };
}

function isSamePosition(a, b) {
  return a.x === b.x && a.y === b.y;
}

export default function SnakeLoader({ onComplete }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let snake = [
      { x: 9, y: 10 },
      { x: 8, y: 10 },
      { x: 7, y: 10 },
    ];

    let food = randomPosition();
    let direction = DIRECTIONS[0];
    let score = 0;
    let animationFrame;
    let lastUpdate = 0;
    const duration = 2800;
    const startedAt = performance.now();

    const draw = (currentTime) => {
      const elapsed = currentTime - startedAt;

      if (elapsed >= duration) {
        cancelAnimationFrame(animationFrame);
        onComplete?.();
        return;
      }

      if (currentTime - lastUpdate > 105) {
        const head = snake[0];

        const nextHead = {
          x: head.x + direction.x,
          y: head.y + direction.y,
        };

        const hitWall =
          nextHead.x < 0 ||
          nextHead.x >= GRID_SIZE ||
          nextHead.y < 0 ||
          nextHead.y >= GRID_SIZE;

        const hitBody = snake.some((part) => isSamePosition(part, nextHead));

        if (hitWall || hitBody) {
          direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

          lastUpdate = currentTime;
          animationFrame = requestAnimationFrame(draw);
          return;
        }

        snake.unshift(nextHead);

        if (isSamePosition(nextHead, food)) {
          score += 10;
          food = randomPosition();
        } else {
          snake.pop();
        }

        // Changement de direction aléatoire occasionnel
        if (Math.random() < 0.08) {
          direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
        }

        lastUpdate = currentTime;
      }

      context.fillStyle = "#111318";
      context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      // Grille très légère
      context.strokeStyle = "rgba(255, 255, 255, 0.045)";
      context.lineWidth = 1;

      for (let index = 0; index <= GRID_SIZE; index += 1) {
        const position = index * CELL_SIZE;

        context.beginPath();
        context.moveTo(position, 0);
        context.lineTo(position, CANVAS_SIZE);
        context.stroke();

        context.beginPath();
        context.moveTo(0, position);
        context.lineTo(CANVAS_SIZE, position);
        context.stroke();
      }

      // Nourriture
      context.fillStyle = "#e9505a";
      context.beginPath();
      context.arc(
        food.x * CELL_SIZE + CELL_SIZE / 2,
        food.y * CELL_SIZE + CELL_SIZE / 2,
        5,
        0,
        Math.PI * 2,
      );
      context.fill();

      // Serpent
      snake.forEach((part, index) => {
        context.fillStyle = index === 0 ? "#9dd1c0" : "#6e8fdc";

        context.beginPath();
        context.roundRect(
          part.x * CELL_SIZE + 2,
          part.y * CELL_SIZE + 2,
          CELL_SIZE - 4,
          CELL_SIZE - 4,
          4,
        );
        context.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <div className="snake-loader" aria-label="Chargement du portfolio">
      <div className="snake-loader__header">
        <span>LOADING_PORTFOLIO</span>
        <span>00{Math.min(score, 99)}</span>
      </div>

      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="snake-loader__canvas"
      />

      <p className="snake-loader__text">
        Le portfolio arrive<span className="loader-dots">...</span>
      </p>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 紅葉の数
const LEAF_COUNT = 30;

// 紅葉のアニメーション
const fallAnimation = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0.8;
  }
`;

// 紅葉のスタイリング
const Leaf = styled.div<{ size: number; left: number; delay: number }>`
  position: absolute;
  top: -10%;
  left: ${(props) => props.left}%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url('/images/momiji.png');
  background-size: cover;
  animation: ${fallAnimation} 10s linear infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const FallingLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<
    { id: number; size: number; left: number; delay: number }[]
  >([]);

  useEffect(() => {
    // ランダムな紅葉を生成
    const generatedLeaves = Array.from({ length: LEAF_COUNT }).map((_, id) => ({
      id,
      size: Math.random() * 20 + 20, // サイズをランダム化
      left: Math.random() * 100, // 横位置をランダム化
      delay: Math.random() * 5, // アニメーションの遅延をランダム化
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div>
      {leaves.map((leaf) => (
        <Leaf
          key={leaf.id}
          size={leaf.size}
          left={leaf.left}
          delay={leaf.delay}
        />
      ))}
    </div>
  );
};

export default FallingLeaves;

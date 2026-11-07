import { useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import OpeningScene from './components/OpeningScene';
import InvitationScene from './components/InvitationScene';

type Scene = 'opening' | 'invitation' | 'attendance';

export default function App() {
  const [scene, setScene] = useState<Scene>('opening');

  return (
    <MotionConfig reducedMotion="user">
      <main className="stage">
        <AnimatePresence mode="wait">
          {scene === 'opening' && (
            <OpeningScene key="o" onOpened={() => setScene('invitation')} />
          )}
          {scene === 'invitation' && (
            <InvitationScene key="i" onContinue={() => setScene('opening')} />
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}

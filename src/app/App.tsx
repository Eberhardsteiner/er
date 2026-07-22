import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LayoutShell } from './LayoutShell';
import { StartSeite } from '../features/start/StartSeite';
import { OnboardingSeite } from '../features/onboarding/OnboardingSeite';
import { DashboardSeite } from '../features/dashboard/DashboardSeite';
import { LektionSeite } from '../features/lektion/LektionSeite';
import { GesamtSeite } from '../features/gesamt/GesamtSeite';
import { TrainerSeite } from '../features/trainer/TrainerSeite';
import { useSpielstand } from '../store/spielstand';

function MitName({ children }: { children: React.ReactNode }) {
  const name = useSpielstand((s) => s.name);
  const istTrainer = useSpielstand((s) => s.istTrainer);
  if (!name && !istTrainer) return <Navigate to="/start" replace />;
  return <>{children}</>;
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/start" element={<StartSeite />} />
        <Route element={<LayoutShell />}>
          <Route
            path="/onboarding"
            element={
              <MitName>
                <OnboardingSeite />
              </MitName>
            }
          />
          <Route
            path="/dashboard"
            element={
              <MitName>
                <DashboardSeite />
              </MitName>
            }
          />
          <Route
            path="/runde/:rundenId"
            element={
              <MitName>
                <LektionSeite />
              </MitName>
            }
          />
          <Route
            path="/modul/:rundenId"
            element={
              <MitName>
                <LektionSeite />
              </MitName>
            }
          />
          <Route
            path="/gesamt"
            element={
              <MitName>
                <GesamtSeite />
              </MitName>
            }
          />
          <Route path="/trainer" element={<TrainerSeite />} />
        </Route>
        {/* Unbekannte Routen landen freundlich auf dem Dashboard. Ohne
            Spielstand leitet MitName von dort weiter zum Start. */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </HashRouter>
  );
}

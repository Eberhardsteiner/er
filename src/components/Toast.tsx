import { useEffect } from 'react';
import { Award } from 'lucide-react';
import { useUi } from '../store/uiStore';
import type { ToastEintrag } from '../store/uiStore';

function EinzelToast({ toast }: { toast: ToastEintrag }) {
  const entferneToast = useUi((s) => s.entferneToast);

  useEffect(() => {
    const timer = window.setTimeout(() => entferneToast(toast.id), 4000);
    return () => window.clearTimeout(timer);
  }, [toast.id, entferneToast]);

  return (
    <div
      className="toast-animation flex items-center gap-3 rounded-lg bg-petrol-900 px-4 py-3 text-sm text-white shadow-lg"
      role="status"
    >
      <Award className="text-amber-500" size={20} aria-hidden="true" />
      <span>{toast.text}</span>
    </div>
  );
}

// Toast-Container fuer Punktemeldungen, unten rechts.
export function ToastContainer() {
  const toasts = useUi((s) => s.toasts);
  if (toasts.length === 0) return null;
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <EinzelToast key={t.id} toast={t} />
      ))}
    </div>
  );
}

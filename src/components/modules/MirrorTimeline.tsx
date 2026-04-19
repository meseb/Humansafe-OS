// src/components/modules/MirrorTimeline.tsx
import { format } from 'date-fns';

interface TimelineEntry {
  id: string;
  date: string;
  hsi: number;
  type: 'log' | 'crash' | 'recovery';
}

export function MirrorTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="space-y-6">
      {entries.map(entry => (
        <div key={entry.id} className="flex items-start gap-4">
          <div className={`w-3 h-3 rounded-full mt-2 ${
            entry.type === 'crash' ? 'bg-red-500' :
            entry.type === 'recovery' ? 'bg-green-500' : 'bg-gray-400'
          }`} />
          <div>
            <div className="font-mono text-sm text-gray-500">
              {format(new Date(entry.date), 'dd MMM yyyy')}
            </div>
            <div className="font-semibold">
              HSI: {entry.hsi}
              {entry.type === 'crash' && ' — Momento critico'}
              {entry.type === 'recovery' && ' — Ripresa'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AccessibilityBar() {
  const actions = ['A-', 'A', 'A+', 'Contraste', 'Libras', 'Audiodescrição'];

  return (
    <aside className="fixed bottom-0 left-0 flex w-full justify-center gap-2 bg-[#E6EDF4] p-3 text-sm text-[#004587]">
      {actions.map((action) => (
        <button key={action} className="rounded px-3 py-1 hover:bg-white">
          {action}
        </button>
      ))}
    </aside>
  );
}

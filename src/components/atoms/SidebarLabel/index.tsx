interface SidebarLabelProps {
  label: string;
}

export function SidebarLabel({ label }: SidebarLabelProps) {
  return (
    <span className="flex items-center gap-x-2 text-slate-500 text-xs font-[500] pl-6">
      <div className="flex items-center gap-x-2 py-2">{label}</div>
    </span>
  );
}

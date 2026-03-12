const props = [
  { name: "type", type: "ToastVariant", default: "—", required: true, description: "Visual style: primary, secondary, success, error, warning, info, light, dark." },
  { name: "message", type: "string", default: "—", required: true, description: "Main notification text displayed in the toast body." },
  { name: "title", type: "string", default: "—", required: false, description: "Optional bold heading rendered above the message." },
  { name: "id", type: "string", default: "auto", required: false, description: "Unique identifier. Auto-generated via Date.now() if omitted." },
  { name: "delayAppearance", type: "boolean", default: "false", required: false, description: "When true, the toast appears after a short delay (~1s)." },
  { name: "onCloseToast", type: "() => void", default: "—", required: false, description: "Callback fired when the toast is dismissed (auto or manual)." },
];

function PropsTable() {
  return (
    <section className="glass-card p-8">
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-3">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">API</span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>
        <h2 className="mt-3 text-xl font-bold text-white">Props Reference</h2>
        <p className="mt-1.5 text-sm text-gray-400">
          All options accepted by{" "}
          <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-violet-300">addToast()</code>.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/8">
              <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Prop</th>
              <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Type</th>
              <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Default</th>
              <th className="pb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {props.map((prop) => (
              <tr key={prop.name}>
                <td className="py-3.5 pr-6">
                  <div className="flex items-center gap-2">
                    <code className="font-mono text-sm font-medium text-white">{prop.name}</code>
                    {prop.required && (
                      <span className="rounded-full bg-violet-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-400">
                        required
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3.5 pr-6">
                  <code className="rounded-md bg-white/6 px-2 py-1 font-mono text-xs text-emerald-300">{prop.type}</code>
                </td>
                <td className="py-3.5 pr-6">
                  {prop.default === "—" ? (
                    <span className="text-gray-600">—</span>
                  ) : (
                    <code className="rounded-md bg-white/6 px-2 py-1 font-mono text-xs text-amber-300">{prop.default}</code>
                  )}
                </td>
                <td className="py-3.5 text-sm text-gray-400">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PropsTable;
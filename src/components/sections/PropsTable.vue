<template>
  <section class="glass-card p-8">
    <div class="mb-6">
      <div class="mb-1 flex items-center gap-3">
        <div class="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
        <span class="text-xs font-semibold uppercase tracking-widest text-gray-500">API</span>
        <div class="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </div>
      <h2 class="mt-3 text-xl font-bold text-white">Props Reference</h2>
      <p class="mt-1.5 text-sm text-gray-400">
        All options accepted by <code class="rounded bg-white/8 px-1.5 py-0.5 text-xs font-mono text-violet-300">addToast()</code>.
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="border-b border-white/8">
            <th class="pb-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Prop</th>
            <th class="pb-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Type</th>
            <th class="pb-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Default</th>
            <th class="pb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">Description</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr v-for="prop in props" :key="prop.name" class="group">
            <td class="py-3.5 pr-6">
              <div class="flex items-center gap-2">
                <code class="font-mono text-sm font-medium text-white">{{ prop.name }}</code>
                <span
                  v-if="prop.required"
                  class="rounded-full bg-violet-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-400"
                >
                  required
                </span>
              </div>
            </td>
            <td class="py-3.5 pr-6">
              <code class="rounded-md bg-white/6 px-2 py-1 font-mono text-xs text-emerald-300">{{ prop.type }}</code>
            </td>
            <td class="py-3.5 pr-6">
              <span v-if="prop.default === '—'" class="text-gray-600">—</span>
              <code v-else class="rounded-md bg-white/6 px-2 py-1 font-mono text-xs text-amber-300">{{ prop.default }}</code>
            </td>
            <td class="py-3.5 text-sm text-gray-400">{{ prop.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = [
  {
    name: 'type',
    type: 'ToastVariant',
    default: '—',
    required: true,
    description: 'Visual style: primary, secondary, success, error, warning, info, light, dark.',
  },
  {
    name: 'message',
    type: 'string',
    default: '—',
    required: true,
    description: 'Main notification text displayed in the toast body.',
  },
  {
    name: 'title',
    type: 'string',
    default: '—',
    required: false,
    description: 'Optional bold heading rendered above the message.',
  },
  {
    name: 'id',
    type: 'string',
    default: 'auto',
    required: false,
    description: 'Unique identifier. Auto-generated via Date.now() if omitted.',
  },
  {
    name: 'delayAppearance',
    type: 'boolean',
    default: 'false',
    required: false,
    description: 'When true, the toast appears after a short delay (~2s).',
  },
  {
    name: 'onCloseToast',
    type: '() => void',
    default: '—',
    required: false,
    description: 'Callback fired when the toast is dismissed (auto or manual).',
  },
];
</script>

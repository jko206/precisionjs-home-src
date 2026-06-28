<template>
  <div class="relative max-w-3xl mx-auto my-12 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
    <div class="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
      <h3 class="text-lg font-semibold text-slate-800">Dynamic Expressions</h3>
      <p class="text-sm text-slate-500 mt-1">Evaluate complex mathematical formulas with injected variables.</p>
    </div>
    
    <div class="p-8 space-y-8">
      <div class="space-y-3">
        <label class="block text-sm font-medium text-slate-700">Formula</label>
        <div class="flex gap-4">
          <input 
            v-model="formula"
            type="text"
            class="flex-1 block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 sm:text-sm font-mono transition-all shadow-inner shadow-slate-100"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(val, key) in variables" :key="key" class="space-y-2">
          <label class="block text-xs font-semibold text-slate-500 uppercase tracking-wide">{{ key }}</label>
          <input 
            v-model="variables[key]"
            type="number"
            class="block w-full rounded-lg border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 sm:text-sm font-mono shadow-sm"
          />
        </div>
      </div>

      <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
        <div class="text-sm font-medium text-slate-500 uppercase tracking-wider">Result</div>
        <div class="font-mono text-2xl font-bold text-teal-600">
          {{ result }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { evaluate } from 'precisionjs';

const formula = ref('(mass * velocity^2) / 2');

const variables = ref({
  mass: 10,
  velocity: 5
});

const result = computed(() => {
  try {
    if (!formula.value.trim()) return '—';
    // Clean up the variables to ensure they are valid for evaluation
    const scope = {};
    for (const [k, v] of Object.entries(variables.value)) {
      if (v !== '' && !isNaN(v)) {
        scope[k] = Number(v);
      }
    }
    
    const res = evaluate(formula.value, scope);
    return res.toString();
  } catch (e) {
    return 'Error';
  }
});
</script>

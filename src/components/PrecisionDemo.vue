<template>
  <div class="relative max-w-3xl mx-auto my-12 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
    <div class="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
      <h3 class="text-lg font-semibold text-slate-800">Standard JavaScript vs PrecisionJS</h3>
      <p class="text-sm text-slate-500 mt-1">See how precision loss occurs natively and how PrecisionJS solves it.</p>
    </div>
    
    <div class="p-8 space-y-6">
      <div class="space-y-3">
        <label class="block text-sm font-medium text-slate-700">Enter a math expression</label>
        <div class="flex gap-4">
          <input 
            v-model="expression"
            type="text"
            class="flex-1 block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 sm:text-sm font-mono transition-all shadow-inner shadow-slate-100"
            placeholder="0.1 + 0.2"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Native JS Result -->
        <div class="relative overflow-hidden rounded-xl border border-rose-100 bg-rose-50/30 p-6">
          <div class="flex items-center gap-2 mb-3">
            <div class="h-2 w-2 rounded-full bg-rose-500"></div>
            <h4 class="text-sm font-semibold text-rose-900">Native JavaScript</h4>
          </div>
          <div class="font-mono text-lg text-rose-700 break-all">
            {{ nativeResult }}
          </div>
        </div>

        <!-- PrecisionJS Result -->
        <div class="relative overflow-hidden rounded-xl border border-teal-100 bg-teal-50/50 p-6 shadow-sm">
          <div class="flex items-center gap-2 mb-3">
            <div class="h-2 w-2 rounded-full bg-teal-500"></div>
            <h4 class="text-sm font-semibold text-teal-900">PrecisionJS</h4>
          </div>
          <div class="font-mono text-lg text-teal-700 break-all font-semibold">
            {{ precisionResult }}
          </div>
        </div>
      </div>
      
      <!-- Predefined Examples -->
      <div class="pt-4 border-t border-slate-100">
        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Try these examples</p>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="example in examples" 
            :key="example"
            @click="expression = example"
            class="px-3 py-1.5 text-sm rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors font-mono"
          >
            {{ example }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { evaluate } from 'precisionjs';

const expression = ref('0.1 + 0.2');

const examples = [
  '0.1 + 0.2',
  '9007199254740991 + 2',
  '1 / 3 * 3',
  '2 ^ 100'
];

const nativeResult = computed(() => {
  try {
    if (!expression.value.trim()) return '—';
    // VERY simple parser for JS evaluation (just for demo purposes)
    // Replace ^ with ** for native JS eval
    let jsExpr = expression.value.replace(/\^/g, '**');
    // We use a safe function constructor instead of direct eval
    const res = new Function(`return ${jsExpr}`)();
    return res !== undefined ? String(res) : '—';
  } catch (e) {
    return 'Invalid Syntax';
  }
});

const precisionResult = computed(() => {
  try {
    if (!expression.value.trim()) return '—';
    const result = evaluate(expression.value);
    return result.toString();
  } catch (e) {
    return 'Invalid Syntax';
  }
});
</script>

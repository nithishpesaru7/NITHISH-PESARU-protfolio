import React, { useState } from 'react';
import { Terminal, Code2, History, RotateCcw, AlertCircle, Check } from 'lucide-react';

export const BasicCalculatorInteractive: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [history, setHistory] = useState<string[]>(['12 + 8 = 20', '50 * 4 = 200']);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'calculator' | 'python_code'>('calculator');

  const handleNumber = (digit: string) => {
    setErrorMessage(null);
    if (display === '0' || display === 'Error') {
      setDisplay(digit);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperator = (op: string) => {
    setErrorMessage(null);
    setEquation(`${display} ${op} `);
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setErrorMessage(null);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleEvaluate = () => {
    if (!equation) return;
    try {
      const parts = equation.trim().split(' ');
      if (parts.length < 2) return;
      const num1 = parseFloat(parts[0]);
      const op = parts[1];
      const num2 = parseFloat(display);

      let result = 0;

      if (op === '+') result = num1 + num2;
      else if (op === '-') result = num1 - num2;
      else if (op === '*') result = num1 * num2;
      else if (op === '/') {
        if (num2 === 0) {
          setErrorMessage('ZeroDivisionError: integer division or modulo by zero');
          setDisplay('Error');
          return;
        }
        result = num1 / num2;
      } else if (op === '%') {
        if (num2 === 0) {
          setErrorMessage('ZeroDivisionError: modulo by zero');
          setDisplay('Error');
          return;
        }
        result = num1 % num2;
      } else if (op === '^') {
        result = Math.pow(num1, num2);
      }

      // Format clean output
      const formattedResult = Number.isInteger(result) ? result.toString() : result.toFixed(4);
      const record = `${num1} ${op} ${num2} = ${formattedResult}`;
      setHistory(prev => [record, ...prev.slice(0, 4)]);
      setDisplay(formattedResult);
      setEquation('');
    } catch {
      setErrorMessage('ValueError: Invalid numerical expression');
      setDisplay('Error');
    }
  };

  const pythonSourceCode = `"""
Modular Python Basic Calculator
Author: Nithish Pesaru (1st Year B.Tech CSE)
Status: In Progress — Iteration 1 Completed
"""

class BasicCalculator:
    def __init__(self):
        self.history = []

    def add(self, a: float, b: float) -> float:
        result = a + b
        self._record(f"{a} + {b} = {result}")
        return result

    def subtract(self, a: float, b: float) -> float:
        result = a - b
        self._record(f"{a} - {b} = {result}")
        return result

    def multiply(self, a: float, b: float) -> float:
        result = a * b
        self._record(f"{a} * {b} = {result}")
        return result

    def divide(self, a: float, b: float) -> float:
        if b == 0:
            raise ZeroDivisionError("Cannot divide by zero.")
        result = a / b
        self._record(f"{a} / {b} = {result}")
        return result

    def power(self, base: float, exp: float) -> float:
        result = base ** exp
        self._record(f"{base} ^ {exp} = {result}")
        return result

    def _record(self, entry: str):
        self.history.append(entry)

# Example interactive usage
calc = BasicCalculator()
try:
    print("Addition:", calc.add(15, 25))
    print("Division:", calc.divide(100, 4))
    # print(calc.divide(10, 0)) # Caught by try-except
except ZeroDivisionError as err:
    print(f"Handled Exception: {err}")
`;

  return (
    <div className="rounded-2xl glass-panel border border-slate-700/80 p-5 sm:p-6 bg-[#0a0f22]/95 shadow-2xl">
      {/* Header with In-Progress badge and view mode toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-lg font-bold text-white">Python Basic Calculator</h3>
            <span className="text-[10px] font-mono uppercase bg-amber-950/60 text-amber-400 border border-amber-800/60 px-2 py-0.5 rounded-full">
              In Progress
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Modular arithmetic execution engine with runtime exception trapping
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                activeTab === 'calculator'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Keypad
            </button>
            <button
              onClick={() => setActiveTab('python_code')}
              className={`px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1 ${
                activeTab === 'python_code'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Python Code</span>
            </button>
          </div>

          <button
            onClick={handleClear}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title="Clear all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {activeTab === 'calculator' ? (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left: Terminal Keypad */}
          <div className="md:col-span-7 bg-[#050711] rounded-xl p-4 border border-slate-800">
            {/* Screen Display */}
            <div className="bg-[#0b1022] rounded-lg p-3 border border-slate-800/80 mb-4 text-right">
              <div className="text-[11px] font-mono text-slate-400 h-4">
                {equation || 'Python Shell Calculator'}
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider truncate">
                {display}
              </div>
            </div>

            {/* Exception Warning Banner */}
            {errorMessage && (
              <div className="mb-3 p-2.5 rounded-lg bg-rose-950/40 border border-rose-900/60 text-xs text-rose-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                <span className="font-mono text-[11px]">{errorMessage}</span>
              </div>
            )}

            {/* Keypad Grid */}
            <div className="grid grid-cols-4 gap-2 text-sm font-mono">
              <button
                onClick={handleClear}
                className="p-2.5 rounded-lg bg-slate-800 text-rose-300 hover:bg-slate-700 transition-colors font-semibold"
              >
                AC
              </button>
              <button
                onClick={handleBackspace}
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
              >
                DEL
              </button>
              <button
                onClick={() => handleOperator('^')}
                className="p-2.5 rounded-lg bg-slate-800 text-purple-300 hover:bg-slate-700 transition-colors"
              >
                ^
              </button>
              <button
                onClick={() => handleOperator('/')}
                className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800/50 text-blue-300 hover:bg-blue-800/50 transition-colors"
              >
                ÷
              </button>

              <button onClick={() => handleNumber('7')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">7</button>
              <button onClick={() => handleNumber('8')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">8</button>
              <button onClick={() => handleNumber('9')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">9</button>
              <button
                onClick={() => handleOperator('*')}
                className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800/50 text-blue-300 hover:bg-blue-800/50 transition-colors"
              >
                ×
              </button>

              <button onClick={() => handleNumber('4')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">4</button>
              <button onClick={() => handleNumber('5')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">5</button>
              <button onClick={() => handleNumber('6')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">6</button>
              <button
                onClick={() => handleOperator('-')}
                className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800/50 text-blue-300 hover:bg-blue-800/50 transition-colors"
              >
                -
              </button>

              <button onClick={() => handleNumber('1')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">1</button>
              <button onClick={() => handleNumber('2')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">2</button>
              <button onClick={() => handleNumber('3')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">3</button>
              <button
                onClick={() => handleOperator('+')}
                className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800/50 text-blue-300 hover:bg-blue-800/50 transition-colors"
              >
                +
              </button>

              <button onClick={() => handleNumber('0')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 col-span-2">0</button>
              <button onClick={() => handleNumber('.')} className="p-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">.</button>
              <button
                onClick={handleEvaluate}
                className="p-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:from-blue-500 hover:to-indigo-500 shadow-md transition-all"
              >
                =
              </button>
            </div>
          </div>

          {/* Right: History Stack & Roadmap */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
                <History className="w-3.5 h-3.5 text-blue-400" />
                <span>Execution History (Stack)</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                {history.length > 0 ? (
                  history.map((item, idx) => (
                    <div key={idx} className="p-1.5 rounded bg-slate-950/60 border border-slate-800 text-slate-300 text-[11px] flex items-center justify-between">
                      <span>{item}</span>
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                  ))
                ) : (
                  <div className="text-slate-500 text-xs">No prior calculations</div>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <span className="text-xs font-semibold text-white block mb-2">
                Active In-Progress Roadmap
              </span>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Iteration 1: Basic Arithmetic (+, -, *, /, ^)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Iteration 1: ZeroDivisionError Safeguards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Iteration 2: Expression Tokenizer & Shunting-yard</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span>Iteration 3: Scientific Python Functions (Math Module)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>calculator.py (Modular OOP Design)</span>
            <span className="text-emerald-400">Validated Python Structure</span>
          </div>
          <pre className="p-4 rounded-xl bg-[#050711] border border-slate-800 text-[11px] sm:text-xs font-mono text-purple-200 overflow-x-auto leading-relaxed">
            <code>{pythonSourceCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

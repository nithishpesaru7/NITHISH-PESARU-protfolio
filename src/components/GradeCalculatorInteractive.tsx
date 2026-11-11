import React, { useState } from 'react';
import { Plus, Trash2, Calculator, Sparkles, Code2, RotateCcw } from 'lucide-react';

interface CourseEntry {
  id: string;
  name: string;
  credits: number;
  marks: number;
}

const defaultCourses: CourseEntry[] = [
  { id: '1', name: 'Python Programming', credits: 4, marks: 92 },
  { id: '2', name: 'Discrete Mathematics', credits: 4, marks: 85 },
  { id: '3', name: 'Computer Organization', credits: 3, marks: 78 },
  { id: '4', name: 'Engineering Physics', credits: 3, marks: 88 },
  { id: '5', name: 'Technical English', credits: 2, marks: 90 },
];

export const GradeCalculatorInteractive: React.FC = () => {
  const [courses, setCourses] = useState<CourseEntry[]>(defaultCourses);
  const [activeTab, setActiveTab] = useState<'calculator' | 'python_code'>('calculator');
  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseCredits, setNewCourseCredits] = useState(3);
  const [newCourseMarks, setNewCourseMarks] = useState(85);

  const getGradePoint = (marks: number): { point: number; letter: string } => {
    if (marks >= 90) return { point: 10, letter: 'O (Outstanding)' };
    if (marks >= 80) return { point: 9, letter: 'A+ (Excellent)' };
    if (marks >= 70) return { point: 8, letter: 'A (Very Good)' };
    if (marks >= 60) return { point: 7, letter: 'B+ (Good)' };
    if (marks >= 50) return { point: 6, letter: 'B (Above Average)' };
    if (marks >= 40) return { point: 5, letter: 'C (Pass)' };
    return { point: 0, letter: 'F (Fail)' };
  };

  const totalCredits = courses.reduce((acc, c) => acc + c.credits, 0);
  const weightedPoints = courses.reduce((acc, c) => {
    return acc + (getGradePoint(c.marks).point * c.credits);
  }, 0);

  const sgpa = totalCredits > 0 ? (weightedPoints / totalCredits).toFixed(2) : '0.00';
  const averagePercentage = courses.length > 0
    ? (courses.reduce((acc, c) => acc + c.marks, 0) / courses.length).toFixed(1)
    : '0';

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseName.trim()) return;
    const newEntry: CourseEntry = {
      id: Date.now().toString(),
      name: newCourseName.trim(),
      credits: Math.max(1, Math.min(6, Number(newCourseCredits))),
      marks: Math.max(0, Math.min(100, Number(newCourseMarks))),
    };
    setCourses([...courses, newEntry]);
    setNewCourseName('');
  };

  const handleRemoveCourse = (id: string) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const handleReset = () => {
    setCourses(defaultCourses);
  };

  // Rule-driven GenAI style study recommendations
  const lowestCourse = courses.length > 0
    ? [...courses].sort((a, b) => a.marks - b.marks)[0]
    : null;
  const highestCourse = courses.length > 0
    ? [...courses].sort((a, b) => b.marks - a.marks)[0]
    : null;

  const pythonSourceCode = `"""
Student Grade Calculator & Academic Advisor
Author: Nithish Pesaru (1st Year B.Tech CSE)
Learning Project: Python Foundations & GenAI Logic
"""

def calculate_grade_point(marks: float) -> tuple[int, str]:
    if marks >= 90:
        return 10, "O (Outstanding)"
    elif marks >= 80:
        return 9, "A+ (Excellent)"
    elif marks >= 70:
        return 8, "A (Very Good)"
    elif marks >= 60:
        return 7, "B+ (Good)"
    elif marks >= 50:
        return 6, "B (Above Average)"
    elif marks >= 40:
        return 5, "C (Pass)"
    else:
        return 0, "F (Fail)"

def evaluate_semester(courses: list[dict]) -> dict:
    total_credits = sum(c["credits"] for c in courses)
    total_weighted_points = sum(calculate_grade_point(c["marks"])[0] * c["credits"] for c in courses)
    
    sgpa = round(total_weighted_points / total_credits, 2) if total_credits > 0 else 0.0
    avg_marks = sum(c["marks"] for c in courses) / len(courses) if courses else 0
    
    return {
        "sgpa": sgpa,
        "total_credits": total_credits,
        "average_percentage": round(avg_marks, 2)
    }

# Interactive evaluation test
if __name__ == "__main__":
    sample_records = [
        {"name": "Python Programming", "credits": 4, "marks": 92},
        {"name": "Discrete Mathematics", "credits": 4, "marks": 85},
    ]
    results = evaluate_semester(sample_records)
    print(f"Calculated SGPA: {results['sgpa']}")
`;

  return (
    <div className="rounded-2xl glass-panel border border-slate-700/80 p-5 sm:p-6 bg-[#0a0f22]/95 shadow-2xl">
      {/* Header and Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <h3 className="text-lg font-bold text-white">Student Grade Calculator Demo</h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Interactive simulator of the Python & GenAI learning project
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
              Interactive App
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
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title="Reset to default courses"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {activeTab === 'calculator' ? (
        <div className="mt-5 space-y-6">
          {/* Key Metric KPI Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block mb-1">Calculated SGPA</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tabular-nums">
                {sgpa}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Scale of 10.0</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block mb-1">Total Credits</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono tabular-nums">
                {totalCredits}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">{courses.length} Courses</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block mb-1">Average Marks</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
                {averagePercentage}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Weighted Avg</span>
            </div>
          </div>

          {/* Courses Table / List */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-medium">
                  <th className="pb-2 pl-1">Course Name</th>
                  <th className="pb-2 text-center">Credits</th>
                  <th className="pb-2 text-center">Score (100)</th>
                  <th className="pb-2">Grade Point</th>
                  <th className="pb-2 text-right pr-1">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {courses.map(course => {
                  const grade = getGradePoint(course.marks);
                  return (
                    <tr key={course.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-2.5 pl-1 font-medium text-white">{course.name}</td>
                      <td className="py-2.5 text-center font-mono text-slate-300">{course.credits} cr</td>
                      <td className="py-2.5 text-center font-mono text-slate-200">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={course.marks}
                          onChange={(e) => {
                            const val = Math.min(100, Math.max(0, Number(e.target.value) || 0));
                            setCourses(courses.map(c => c.id === course.id ? { ...c, marks: val } : c));
                          }}
                          className="w-16 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-center font-mono text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </td>
                      <td className="py-2.5">
                        <span className="font-mono text-blue-300 font-semibold">{grade.point}/10</span>
                        <span className="text-slate-400 text-[11px] ml-1.5 hidden sm:inline">({grade.letter.split(' ')[0]})</span>
                      </td>
                      <td className="py-2.5 text-right pr-1">
                        <button
                          onClick={() => handleRemoveCourse(course.id)}
                          className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                          title="Remove course"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Add Course Inline Form */}
          <form onSubmit={handleAddCourse} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap gap-2 items-center">
            <input
              type="text"
              placeholder="Course title (e.g. Data Structures)..."
              value={newCourseName}
              onChange={(e) => setNewCourseName(e.target.value)}
              className="flex-1 min-w-[160px] px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <span>Credits:</span>
              <input
                type="number"
                min="1"
                max="6"
                value={newCourseCredits}
                onChange={(e) => setNewCourseCredits(Number(e.target.value))}
                className="w-12 px-2 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-white font-mono text-center focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <span>Marks:</span>
              <input
                type="number"
                min="0"
                max="100"
                value={newCourseMarks}
                onChange={(e) => setNewCourseMarks(Number(e.target.value))}
                className="w-14 px-2 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-white font-mono text-center focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1 transition-colors shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Course</span>
            </button>
          </form>

          {/* Simulated GenAI Feedback Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-900/60 border border-indigo-900/50">
            <div className="flex items-center gap-2 mb-2 text-indigo-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                GenAI Academic Advisor Insight
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {Number(sgpa) >= 8.5 ? (
                <>
                  <strong className="text-white">Exceptional Semester Trajectory:</strong> Your SGPA of <span className="text-blue-300 font-mono">{sgpa}</span> demonstrates strong comprehension across quantitative subjects.
                  {highestCourse && ` Leading performance in ${highestCourse.name} (${highestCourse.marks}%) indicates strong aptitude for follow-up upper-division AI courses.`}
                  {lowestCourse && lowestCourse.marks < 80 && ` Recommend allocating 2 hours/week additional review to ${lowestCourse.name} to preserve honors GPA.`}
                </>
              ) : (
                <>
                  <strong className="text-white">Solid Foundational Progress:</strong> Current SGPA stands at <span className="text-purple-300 font-mono">{sgpa}</span>.
                  {lowestCourse && ` Primary focus opportunity is in ${lowestCourse.name} (${lowestCourse.marks}%). Recommend breaking down algorithmic problem sets into 30-minute daily review sessions.`}
                </>
              )}
            </p>
          </div>
        </div>
      ) : (
        /* Python Code Inspection */
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>grade_calculator.py (Python 3.11)</span>
            <span className="text-emerald-400">Validated Syntax</span>
          </div>
          <pre className="p-4 rounded-xl bg-[#050711] border border-slate-800 text-[11px] sm:text-xs font-mono text-blue-200 overflow-x-auto leading-relaxed">
            <code>{pythonSourceCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

import { timeline } from "../data/timeline"

const getProgress = (start, end) => {
  const now = new Date()
  const s = new Date(start)
  const e = new Date(end)

  if (now < s) return 0
  if (now > e) return 100

  return ((now - s) / (e - s)) * 100
}

export default function Timeline() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <h2 className="text-center text-3xl font-bold mb-2">Time Line</h2>
      <p className="text-center text-lg mb-10">2025–2026</p>

      <div className="relative">
        {/* Garis background */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 rounded-full -translate-y-1/2"></div>

        {/* Garis biru (dinamis) */}
        <div
          className="absolute top-1/2 h-2 bg-blue-600 rounded-full -translate-y-1/2 transition-all"
          style={{ width: `${calculateTotalProgress(timeline)}%` }}
        ></div>

        {/* Titik + label */}
        <div className="flex justify-between relative">
          {timeline.map((item, idx) => {
            const p = getProgress(item.startDate, item.endDate)

            return (
              <div key={idx} className="text-center w-32 -translate-y-6">
                <div
                  className={`w-5 h-5 mx-auto rounded-full border-2 ${
                    p === 100
                      ? "bg-blue-600 border-blue-600"
                      : p > 0
                      ? "bg-blue-300 border-blue-600"
                      : "bg-white border-gray-400"
                  }`}
                ></div>

                <p className="mt-3 font-semibold">{item.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Hitung progress total garis biru
function calculateTotalProgress(list) {
  const now = new Date()
  const first = new Date(list[0].startDate)
  const last = new Date(list[list.length - 1].endDate)

  if (now <= first) return 0
  if (now >= last) return 100

  return ((now - first) / (last - first)) * 100
}
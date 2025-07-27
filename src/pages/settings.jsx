import React, { useState } from "react";

const SettingPage = () => {
  const [belief, setBelief] = useState("eastern");
  const [pushEnabled, setPushEnabled] = useState(true);
  const [pushTypes, setPushTypes] = useState({
    zodiac: true,
    calendar: true,
    relationship: true,
  });

  const handleToggleType = (type) => {
    setPushTypes({ ...pushTypes, [type]: !pushTypes[type] });
  };

  const activeBtn = "bg-purple-500 text-white px-4 py-1 rounded-full text-sm";
  const inactiveBtn =
    "bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm";

  return (
    <div className="min-h-screen bg-purple-50 pb-20">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white shadow">
        <button className="text-purple-600 text-xl">←</button>
        <h1 className="text-lg font-bold text-purple-700">設定</h1>
        <button className="text-purple-600 text-xl">⚙️</button>
      </header>

      {/* Main */}
      <main className="p-4">
        {/* 帳號設定 */}
        <section className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <h2 className="font-semibold text-gray-800 mb-2">帳號設定</h2>
          <ul className="divide-y text-sm text-gray-700">
            <li className="flex justify-between items-center py-3">
              <span>個人資料</span>
              <span className="text-purple-600">➡️</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span>訂閱管理</span>
              <span className="text-purple-600">➡️</span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span>LINE 帳號綁定</span>
              <span className="text-xs bg-purple-200 text-purple-700 px-2 py-1 rounded-full">
                已綁定
              </span>
            </li>
          </ul>
        </section>

        {/* 偏好設定 */}
        <section className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="font-semibold text-gray-800 mb-2">偏好設定</h2>

          {/* 信仰偏好 */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">信仰偏好</p>
            <div className="flex space-x-2">
              <button
                className={belief === "eastern" ? activeBtn : inactiveBtn}
                onClick={() => setBelief("eastern")}
              >
                東方信仰
              </button>
              <button
                className={belief === "western" ? activeBtn : inactiveBtn}
                onClick={() => setBelief("western")}
              >
                西方信仰
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              包含：易經、農民曆、生肖、道教等
            </p>
          </div>

          {/* 推播開關 */}
          <div>
            <label className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">開啟推播通知</span>
              <input
                type="checkbox"
                checked={pushEnabled}
                onChange={(e) => setPushEnabled(e.target.checked)}
                className="w-5 h-5"
              />
            </label>

            {pushEnabled && (
              <div className="space-y-2">
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">星座運勢</span>
                  <input
                    type="checkbox"
                    checked={pushTypes.zodiac}
                    onChange={() => handleToggleType("zodiac")}
                    className="w-5 h-5"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">農民曆提醒</span>
                  <input
                    type="checkbox"
                    checked={pushTypes.calendar}
                    onChange={() => handleToggleType("calendar")}
                    className="w-5 h-5"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">利害關係人運勢</span>
                  <input
                    type="checkbox"
                    checked={pushTypes.relationship}
                    onChange={() => handleToggleType("relationship")}
                    className="w-5 h-5"
                  />
                </label>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 shadow-inner">
        <button>🔮</button>
        <button>👥</button>
        <button className="text-purple-600 text-xl">🏠</button>
        <button>🛒</button>
        <button>👤</button>
      </footer>
    </div>
  );
};

export default SettingPage;

import { useState, useEffect } from 'react';
import { User, Bell, Globe, Moon } from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { useThemeStore } from '../../store/themeStore';

export default function ProfileSettings() {
  const { user, updateUser } = useUserStore();
  const { theme, setTheme } = useThemeStore();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    language: 'en',
    notifications: true
  });

  useEffect(() => {
    // Apply theme to body element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({
      ...user!,
      name: formData.name,
      email: formData.email
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Profile Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 dark:text-white">
            <User className="w-5 h-5" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 dark:text-white">
            <Globe className="w-5 h-5" />
            Language & Region
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Language
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

        {/* Theme */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 dark:text-white">
            <Moon className="w-5 h-5" />
            Theme
          </h3>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
                className="text-primary"
              />
              <span className="dark:text-white">Light</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
                className="text-primary"
              />
              <span className="dark:text-white">Dark</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
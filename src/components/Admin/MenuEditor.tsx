import { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { useUserStore } from '../../store/userStore';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function MenuEditor() {
  const user = useUserStore((state) => state.user);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({});

  if (user?.role !== 'admin') {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
        <p className="text-gray-600 mt-2">
          You don't have permission to access this area.
        </p>
      </div>
    );
  }

  const handleSave = (item: MenuItem) => {
    // In a real app, this would make an API call
    setItems(items.map((i) => (i.id === item.id ? item : i)));
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    // In a real app, this would make an API call
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAddNew = () => {
    // In a real app, this would make an API call
    const newId = Math.max(...items.map((i) => i.id), 0) + 1;
    setItems([...items, { ...newItem, id: newId } as MenuItem]);
    setNewItem({});
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold gradient-text">Menu Management</h2>
        <button
          onClick={() => setEditingId(0)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          <Plus className="w-5 h-5" />
          Add New Item
        </button>
      </div>

      <div className="grid gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            
            {editingId === item.id ? (
              <div className="flex-1 space-y-4">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    setItems(
                      items.map((i) =>
                        i.id === item.id
                          ? { ...i, name: e.target.value }
                          : i
                      )
                    )
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Item name"
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    setItems(
                      items.map((i) =>
                        i.id === item.id
                          ? { ...i, price: parseFloat(e.target.value) }
                          : i
                      )
                    )
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Price"
                />
                <textarea
                  value={item.description}
                  onChange={(e) =>
                    setItems(
                      items.map((i) =>
                        i.id === item.id
                          ? { ...i, description: e.target.value }
                          : i
                      )
                    )
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Description"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSave(item)}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:opacity-90"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded hover:opacity-90"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-primary font-bold mt-2">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            )}

            {editingId !== item.id && (
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingId(item.id)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Edit2 className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
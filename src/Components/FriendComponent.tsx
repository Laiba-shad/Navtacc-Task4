import React, { useState } from "react";

const FriendComponent = () => {
  const [input, setInput] = useState("");
  const [friendList, setFriendList] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const AddAtBeginning = () => {
    if (!input) return;
    setFriendList([input, ...friendList]);
    setInput("");
  };

  const AddAtEnd = () => {
    if (!input) return;
    setFriendList([...friendList, input]);
    setInput("");
  };

  const AddInMiddle = () => {
    if (!input) return;
    const mid = Math.floor(friendList.length / 2);
    setFriendList([
      ...friendList.slice(0, mid),
      input,
      ...friendList.slice(mid),
    ]);
    setInput("");
  };

  const removeBeginning = () => {
    setFriendList(friendList.slice(1));
  };

  const removeFromEnd = () => {
    setFriendList(friendList.slice(0, -1));
  };

  const sortList = () => {
    setFriendList((prev) => [...prev].sort((a, b) => a.localeCompare(b)));
  };

  const removeFriend = (name: string) => {
    setFriendList(friendList.filter((f) => f !== name));
    setSearch("");
  };

  const searchResult = search
    ? friendList.filter((f) =>
        f.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="p-4 max-w-md bg-teal-50 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Friend Manager</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <div className="flex flex-wrap gap-2 mb-3">
        <button
          onClick={AddAtBeginning}
          className="bg-teal-500 text-white px-3 py-1 rounded"
        >
          Add At Beginning
        </button>
        <button
          onClick={AddAtEnd}
          className="bg-teal-500 text-white px-3 py-1 rounded"
        >
          Add At End
        </button>
        <button
          onClick={AddInMiddle}
          className="bg-teal-500 text-white px-3 py-1 rounded"
        >
          Add in Middle
        </button>
        <button
          onClick={removeBeginning}
          className="bg-orange-500 text-white px-3 py-1 rounded"
        >
          Remove from Beginning
        </button>
        <button
          onClick={removeFromEnd}
          className="bg-orange-500 text-white px-3 py-1 rounded"
        >
          Remove from End
        </button>
        <button
          onClick={sortList}
          className="bg-teal-700 text-white px-3 py-1 rounded"
        >
          Sort
        </button>
      </div>

      <h3 className="font-semibold mb-1">Friend List:</h3>
      {friendList.length > 0 ? (
        <ul className="list-disc pl-5 mb-3">
          {friendList.map((f, i) => (
            <li key={i} className="mb-1 flex justify-between items-center">
              {f}
              <button
                onClick={() => removeFriend(f)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic mb-3">I am lonely</p>
      )}

      <input
        placeholder="Search Friend"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <h3 className="font-semibold mb-1">Search Result:</h3>
      {search ? (
        searchResult.length > 0 ? (
          <ul className="list-disc pl-5">
            {searchResult.map((f, i) => (
              <li key={i} className="mb-1">
                {f}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Not found</p>
        )
      ) : (
        <p className="text-gray-500 italic">Type something to search</p>
      )}
    </div>
  );
};

export default FriendComponent;

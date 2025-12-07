// -------------------------
// DEMO MODE CHAT SYSTEM
// -------------------------

console.warn("CHAT RUNNING IN DEMO MODE — NO FIREBASE USED.");

let demoChats = {
  global_team_chat: {
    type: "channel",
    title: "Global Team Chat",
    messages: [
      { from: "System", text: "Welcome to the Global Chat!", time: "Just now" },
      { from: "Coach Mark", text: "Who played today?", time: "2 min ago" }
    ]
  }
};

let currentDemoChatId = null;

// UI ELEMENTS
const chatList = document.getElementById("chat-list");
const messagesContainer = document.getElementById("messages-container");
const chatRoomTitle = document.getElementById("chat-room-title");
const chatPlaceholder = document.getElementById("chat-placeholder");
const chatInputArea = document.getElementById("chat-input-area");
const chatMessageInput = document.getElementById("chat-message-input");
const sendChatBtn = document.getElementById("send-chat-btn");

// -------------------------
// OPEN A CHAT
// -------------------------
export function openChatDemo(chatId) {
  currentDemoChatId = chatId;
  const chat = demoChats[chatId];

  if (!chat) return console.error("Chat does not exist in demo mode:", chatId);

  chatRoomTitle.textContent = chat.title || "Chat";
  chatPlaceholder.classList.add("hidden");
  chatInputArea.classList.remove("hidden");

  renderDemoMessages(chatId);
}

// -------------------------
// RENDER MESSAGES
// -------------------------
function renderDemoMessages(chatId) {
  const chat = demoChats[chatId];
  messagesContainer.innerHTML = "";

  chat.messages.forEach(msg => {
    const el = document.createElement("div");
    el.className = "p-2 rounded-lg bg-slate-800 text-slate-200";
    el.textContent = `${msg.from}: ${msg.text}`;
    messagesContainer.appendChild(el);
  });

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// -------------------------
// SEND MESSAGE
// -------------------------
sendChatBtn.addEventListener("click", () => {
  const text = chatMessageInput.value.trim();
  if (!text || !currentDemoChatId) return;

  demoChats[currentDemoChatId].messages.push({
    from: "You",
    text,
    time:

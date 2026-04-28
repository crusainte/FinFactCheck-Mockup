// Messaging App Logic
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.getElementById('chatMessages');
    const statusBar = document.getElementById('statusBar');
    const statusText = document.querySelector('.status-text');
    const statusIcon = document.querySelector('.status-icon');

    // Hardcoded replies
    const hardcodedReplies = [
        "The finfluencer is based in Singapore and is registered under ABC License [1]",
        "The video does not exert pressure on the audience to invest and does not promise unrealistic return of more than 10%.",
        `Video transcript: 
        CSPX vs VOO: Which is better? While VOO (Vanguard S&P 500 ETF) has a lower expense ratio of 0.03% compared to CSPX (iShares Core S&P 500 UCITS ETF) at 0.07%, the better choice depends on your tax situation.
        For Investors in Singapore (or countries without a US tax treaty), CSPX is generally better as it is an Ireland-domiciled ETF, which reduces the diviend withholding tax to 15%`,
        "For investment outside your jurisdiction, do check if there are US estate tax [2] or other applicable guidelines [3][4]",
        "Consider the scenario before you perform the trade. Would you be selling off if you had invested S$20,000 and the value of the financial drops by 30%, leaving you with a loss of S$6,000?",
        "Citations: [1] Website of licensed influencers [2] Policy on US estate tax in Singapore [3] Document on Singapore-US investment regulations [4] Guidelines on Singapore investment accounts"
    ];

    // Initialize app
    function initApp() {
        console.log('Messaging app initialized');
    }

    // Add message to chat
    function addMessage(text, isSent = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${escapeHtml(text)}</p>
            </div>
            <div class="message-time">${timeString}</div>
        `;
        
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Add fade-in animation
        setTimeout(() => {
            messageDiv.style.animation = 'fadeIn 0.3s ease';
        }, 10);
    }

    // Send user message
    function sendUserMessage() {
        const message = messageInput.value.trim();
        
        if (!message) {
            // Show warning if input is empty
            messageInput.style.border = '2px solid #ff6b6b';
            setTimeout(() => {
                messageInput.style.border = 'none';
            }, 1000);
            return;
        }
        
        // Add user message
        addMessage(message, true);
        
        // Clear input
        messageInput.value = '';
        
        // Set processing status
        setProcessingStatus(true);
        
        // Start generating replies after 1 second
        setTimeout(() => {
            generateReplies();
        }, 1000);
    }

    // Generate hardcoded replies
    function generateReplies() {
        let delay = 0;
        
        hardcodedReplies.forEach((reply, index) => {
            setTimeout(() => {
                addMessage(reply, false);
                
                // Update status text with progress
                statusText.textContent = `Processing reply ${index + 1}/${hardcodedReplies.length}`;
                
                // If last reply, reset status
                if (index === hardcodedReplies.length - 1) {
                    setTimeout(() => {
                        setProcessingStatus(false);
                    }, 500);
                }
            }, delay);
            
            delay += 2000; // 2 seconds between replies
        });
    }

    // Set processing status
    function setProcessingStatus(isProcessing) {
        if (isProcessing) {
            statusBar.classList.add('processing');
            statusText.textContent = 'Processing replies...';
            statusIcon.className = 'fas fa-circle-notch fa-spin status-icon';
        } else {
            statusBar.classList.remove('processing');
            statusText.textContent = 'Ready';
            statusIcon.className = 'fas fa-circle status-icon';
        }
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Event Listeners
    sendButton.addEventListener('click', sendUserMessage);
    
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    // Add some visual feedback for input focus
    messageInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 0 2px rgba(102, 126, 234, 0.2)';
    });
    
    messageInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = 'none';
    });

    // Initialize the app
    initApp();
    
    // // Add a welcome message
    // setTimeout(() => {
    //     addMessage("Welcome! Try sending a message to see the app in action.", false);
    // }, 500);
});
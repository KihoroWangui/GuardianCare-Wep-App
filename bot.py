import random
import re
# Dictionary of patterns and responses
patterns_responses = {
    r'(.*)hello(.*)': ['Hello', 'Hi there!', 'Greetings!'],
    r'(.*)how are you(.*)': ['Im here to help you. How can I assist you today?'],
    r'(.*)goodbye(.*)': ['Goodbye!', 'Take care!', 'See you later!'],
    r'(.*)thank you(.*)': ['You\'re welcome!', 'Anytime!', 'Glad to help!'],
    r'(.*)help(.*)': ['How can I assist you?', 'What do you need help with?'],
    r'(.*)(?:feel|feeling)(.*)': ['It\'s important to acknowledge your feelings. Can you tell me more about it?'],
    r'(.*)caregiver(.*)': ['Being a caregiver is challenging, but you\'re doing a great job.'],
    r'(.*)support(.*)': ['You\'re not alone. There are people who can support you.'],
    r'(.*)love(.*)': ['Love is an important part of caregiving. Your love and support make a difference.'],
    r'(.*)stress(.*)': ['Taking care of yourself is essential. Have you tried any stress-relief techniques?'],
    r'(.*)friend(.*)': ['It\'s important to have friends who understand and support you.'],
    r'(.*)family(.*)': ['Family can be a great source of support. Have you talked to them about how you\'re feeling?'],
}

def respond(message):
    """
    Respond to a message based on patterns in patterns_responses.
    """
    for pattern, responses in patterns_responses.items():
        match = re.match(pattern, message, re.IGNORECASE)
        if match:
            response = random.choice(responses)
            return response

    # If no pattern matches, return a generic response
    return "I'm here to support you. How can I assist you today?"

def main():
    print("Welcome to the Caregiver Chatbot!")
    print("You can type 'exit' to end the conversation.")

    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            print("Goodbye!")
            break

        bot_response = respond(user_input)
        print("Bot: " + bot_response)

if __name__ == "__main__":
    main()

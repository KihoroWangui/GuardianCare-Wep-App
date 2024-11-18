import re
import random
#pre-defined responses using data dictonary
response={
    "hello":["Hello, how can I help you"],
    "I feel(.')": ["Why do you feel {}", "How  long have you been {}"],
    "I am (.')": ["Why do you say you're {}?", "How long have you been {}?"],
    "I (.') ": ["Why do you {}me?", "What makes you think {} me?" ] 
}
#function to match user's input to a pre-defined response
def match_response(input_text):
    #loop to iterate over items in the response dictonary
    for pattern, response_list in response.items():
        matches  = re.match(pattern, input_text.low())
        if matches:
            chosen_response =  random.choice(response_list)
            return chosen_response.format(matches.groups())
#No pattern to match response

#main loop to start the chatbot
print ("Welcome to GuardianCare Psychotherapist chatbot")
while True:
    user_input= input("You: ")
    if user_input.lower == "bye":
        print("Guardian:  Goodbye.")
        break
    else:
            print("Guardian: "+match_response(user_input))

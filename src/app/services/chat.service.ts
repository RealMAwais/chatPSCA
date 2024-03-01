import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  conversation = new Subject<Message[]>();
  messageMap: any = {
    "hi": "hello",
    "Hi": "Hello",
    "My ivs is not working": "Please check your internet connection first, or call helpdesk team to rectify the issue.",
    "My IVS is not working": "Please check your internet connection first, or call helpdesk team to rectify the issue.",
    "My mic is not working": "Please check audio pin is plugged in or not? If its already plugged in then please check your audio driver.",
    "my mic is not working": "Please check audio pin is plugged in or not? If its already plugged in then please check your audio driver.",
    "My computer is stuck": "Please check with taskmanager or restart your system, or maybe you can call helpdesk team to rectify the issue.",
    "my computer is stuck": "Please check with taskmanager or restart your system, or maybe you can call helpdesk team to rectify the issue.",
    "Call helpdesk": "dial extension code: 2574, thank you!",
    "call helpdesk": "dial extension code: 2574, thank you!",
    "Hello": "Hi there! How can I assist you today?",
    "Can you help me with a login issue?": "Sure, please make sure you're using the correct username and password. If the issue persists, contact the IT department.",
    "I forgot my password": "No worries! You can reset your password through the self-service portal or contact the IT helpdesk for assistance.",
    "How do I update my profile information?": "To update your profile, navigate to the settings page on the platform and follow the instructions. If you need further assistance, contact support.",
    "What is the process for submitting a support ticket?": "You can submit a support ticket through the online portal or email our support team at support@example.com. Provide detailed information about the issue for faster resolution.",
    "I need access to a specific feature": "Access to features is typically managed by administrators. Please contact your supervisor or IT administrator to request the necessary permissions.",
    "How can I check my call history?": "You can view your call history in the 'Call Log' section. If you encounter any issues, please contact support for help.",
    "The system is slow today": "We apologize for the inconvenience. Our technical team is aware of the issue and is working to resolve it. Please bear with us for a moment.",
    "I received an error message": "Could you please provide the exact error message you received? This will help us diagnose and resolve the issue more effectively.",
    "Is there a mobile app available?": "Yes, we have a mobile app available for download on iOS and Android platforms. Search for 'PUCAR15' in the app store to get started.",
    "How often is the system updated?": "System updates are typically scheduled outside of business hours to minimize disruptions. You will be notified in advance of any planned updates.",
    "My call got disconnected": "We apologize for the inconvenience. If this issue persists, please check your internet connection or contact our technical support team for further assistance.",
    "I need training on using the system": "Certainly! We offer training sessions for new users. Please contact the training department to schedule a session at your convenience.",
    "Can I customize my dashboard?": "Yes, you can customize your dashboard to display the information most relevant to you. Explore the settings menu to personalize your experience.",
    "How do I update my availability status?": "Your availability status can usually be updated in the 'Settings' or 'Profile' section. If you encounter difficulties, please reach out to our support team.",
    "I'm having trouble with the search function": "Ensure that you're using the correct keywords and filters in the search function. If issues persist, contact our support team for assistance.",
    "What is the procedure for escalating a call?": "If you need to escalate a call, follow the established protocol outlined in the company guidelines. For additional assistance, contact your supervisor or manager.",
    "Is there a shortcut for common actions?": "Yes, you can find a list of shortcuts in the user manual or help documentation. If you have specific shortcuts in mind, let me know, and I can provide guidance.",
    "I'm experiencing audio quality issues": "Check your microphone and speaker connections. If the issue persists, contact our IT support team for further troubleshooting.",
    "How can I update my notification preferences?": "You can manage notification preferences in the 'Settings' or 'Profile' section. Customize alerts based on your preferences and workflow.",
    "I need information on the latest software update": "For information on the latest software update, refer to the release notes available in the documentation section. Contact support for any specific inquiries.",
    "Can I export call logs for reporting purposes?": "Yes, you can export call logs for reporting. Navigate to the 'Reports' section or contact support for assistance with custom report generation.",
    "Is there a limit to the number of concurrent calls?": "The system is designed to handle a specific number of concurrent calls. If you're experiencing issues, please reach out to our technical support team for optimization.",
    "What security measures are in place for user data?": "We prioritize the security of user data. Refer to the security documentation or contact our security team for detailed information on data protection measures.",
    "I received a software update notification": "It's recommended to install software updates promptly to access new features and security enhancements. Follow the update instructions provided or contact support for assistance.",
    "How do I integrate PUCAR15 with other tools?": "Integration details can be found in the integration documentation. If you need further assistance, contact our integration support team for guidance.",
    "Is there a troubleshooting guide available?": "Yes, there is a troubleshooting guide in the documentation section. Follow the step-by-step instructions to resolve common issues, or contact support for personalized assistance.",
    "I'm having difficulty navigating the interface": "Explore the tutorial videos in the 'Help' section for a visual guide on navigating the interface. For additional support, contact our user experience team.",
    "What are the system requirements for PUCAR15?": "Refer to the system requirements documentation for information on hardware and software prerequisites. Contact support if you have specific questions about compatibility.",
    "How can I provide feedback on the system?": "We appreciate your feedback! You can submit feedback through the 'Feedback' section or contact our customer support team with your suggestions and comments.",
    "I'm having trouble accessing the online help documentation": "Ensure you have a stable internet connection and try accessing the documentation again. If issues persist, contact our support team for alternative access options.",
    "What is the response time for technical support tickets?": "Our technical support team strives to respond to tickets promptly. Response times may vary based on the nature and urgency of the issue. Contact support for real-time updates on your ticket.",
    "How do I set up call forwarding?": "Call forwarding options can usually be configured in the 'Settings' or 'Call Preferences' section. If you encounter difficulties, contact our support team for assistance.",
    "I accidentally deleted a call recording": "We understand mistakes happen. If you need to recover a deleted call recording, contact our support team with details, and we'll assist you in the recovery process.",
    "What training resources are available for new users?": "New users can access training resources in the 'Training' or 'Learning Center' section. For personalized training sessions, contact our training department to schedule a session.",
    "Can I use PUCAR15 on multiple devices?": "Yes, you can use PUCAR15 on multiple devices. Ensure you're using the latest version and log in with your credentials to access your account across devices.",
    "How do I update my contact information?": "You can update your contact information in the 'Profile' or 'Account Settings' section. If you need assistance, contact our support team for guidance.",
    "I'm getting a 'session expired' message": "If you're receiving a 'session expired' message, try logging out and logging back in. If the issue persists, contact our support team for further assistance.",
    "What training is available for advanced features?": "Advanced feature training sessions are available upon request. Contact our training department to schedule a session and enhance your skills.",
    "I need assistance with a system integration": "For assistance with system integration, reach out to our integration support team. Provide details about your integration requirements for personalized guidance.",
    "How do I access historical call data?": "Historical call data can usually be accessed in the 'Reports' or 'Analytics' section. If you need specific information, contact support for customized report generation.",
    "Can I change my username?": "Username changes are typically managed by administrators. Contact your IT administrator or support team to request a username change.",
    "I'm having trouble with the mobile app": "For mobile app issues, ensure you're using the latest version. If problems persist, uninstall and reinstall the app or contact our mobile support team for assistance.",
    "What is the process for updating emergency contact information?": "Emergency contact information can be updated in the 'Emergency Contacts' or 'Profile' section. If you need assistance, contact support for guidance.",
    "Can I use PUCAR15 offline?": "PUCAR15 is primarily designed for online use. If you require offline functionality, contact our support team to discuss potential solutions or workarounds.",
    "hello": "Hi there! How can I assist you today?",
    "can you help me with a login issue?": "Sure, please make sure you're using the correct username and password. If the issue persists, contact the IT department.",
    "i forgot my password": "No worries! You can reset your password through the self-service portal or contact the IT helpdesk for assistance.",
    "how do i update my profile information?": "To update your profile, navigate to the settings page on the platform and follow the instructions. If you need further assistance, contact support.",
    "what is the process for submitting a support ticket?": "You can submit a support ticket through the online portal or email our support team at support@example.com. Provide detailed information about the issue for faster resolution.",
    "i need access to a specific feature": "Access to features is typically managed by administrators. Please contact your supervisor or IT administrator to request the necessary permissions.",
    "how can i check my call history?": "You can view your call history in the 'Call Log' section. If you encounter any issues, please contact support for help.",
    "the system is slow today": "We apologize for the inconvenience. Our technical team is aware of the issue and is working to resolve it. Please bear with us for a moment.",
    "i received an error message": "Could you please provide the exact error message you received? This will help us diagnose and resolve the issue more effectively.",
    "is there a mobile app available?": "Yes, we have a mobile app available for download on iOS and Android platforms. Search for 'PUCAR15' in the app store to get started.",
    "how often is the system updated?": "System updates are typically scheduled outside of business hours to minimize disruptions. You will be notified in advance of any planned updates.",
    "my call got disconnected": "We apologize for the inconvenience. If this issue persists, please check your internet connection or contact our technical support team for further assistance.",
    "i need training on using the system": "Certainly! We offer training sessions for new users. Please contact the training department to schedule a session at your convenience.",
    "can i customize my dashboard?": "Yes, you can customize your dashboard to display the information most relevant to you. Explore the settings menu to personalize your experience.",
    "how do i update my availability status?": "Your availability status can usually be updated in the 'Settings' or 'Profile' section. If you encounter difficulties, please reach out to our support team.",
    "i'm having trouble with the search function": "Ensure that you're using the correct keywords and filters in the search function. If issues persist, contact our support team for assistance.",
    "what is the procedure for escalating a call?": "If you need to escalate a call, follow the established protocol outlined in the company guidelines. For additional assistance, contact your supervisor or manager.",
    "is there a shortcut for common actions?": "Yes, you can find a list of shortcuts in the user manual or help documentation. If you have specific shortcuts in mind, let me know, and I can provide guidance.",
    "i'm experiencing audio quality issues": "Check your microphone and speaker connections. If the issue persists, contact our IT support team for further troubleshooting.",
    "how can i update my notification preferences?": "You can manage notification preferences in the 'Settings' or 'Profile' section. Customize alerts based on your preferences and workflow.",
    "i need information on the latest software update": "For information on the latest software update, refer to the release notes available in the documentation section. Contact support for any specific inquiries.",
    "can i export call logs for reporting purposes?": "Yes, you can export call logs for reporting. Navigate to the 'Reports' section or contact support for assistance with custom report generation.",
    "is there a limit to the number of concurrent calls?": "The system is designed to handle a specific number of concurrent calls. If you're experiencing issues, please reach out to our technical support team for optimization.",
    "what security measures are in place for user data?": "We prioritize the security of user data. Refer to the security documentation or contact our security team for detailed information on data protection measures.",
    "i received a software update notification": "It's recommended to install software updates promptly to access new features and security enhancements. Follow the update instructions provided or contact support for assistance.",
    "how do i integrate PUCAR15 with other tools?": "Integration details can be found in the integration documentation. If you need further assistance, contact our integration support team for guidance.",
    "is there a troubleshooting guide available?": "Yes, there is a troubleshooting guide in the documentation section. Follow the step-by-step instructions to resolve common issues, or contact support for personalized assistance.",
    "i'm having difficulty navigating the interface": "Explore the tutorial videos in the 'Help' section for a visual guide on navigating the interface. For additional support, contact our user experience team.",
    "what are the system requirements for PUCAR15?": "Refer to the system requirements documentation for information on hardware and software prerequisites. Contact support if you have specific questions about compatibility.",
    "how can i provide feedback on the system?": "We appreciate your feedback! You can submit feedback through the 'Feedback' section or contact our customer support team with your suggestions and comments.",
    "i'm having trouble accessing the online help documentation": "Ensure you have a stable internet connection and try accessing the documentation again. If issues persist, contact our support team for alternative access options.",
    "what is the response time for technical support tickets?": "Our technical support team strives to respond to tickets promptly. Response times may vary based on the nature and urgency of the issue. Contact support for real-time updates on your ticket.",
    "how do i set up call forwarding?": "Call forwarding options can usually be configured in the 'Settings' or 'Call Preferences' section. If you encounter difficulties, contact our support team for assistance.",
    "i accidentally deleted a call recording": "We understand mistakes happen. If you need to recover a deleted call recording, contact our support team with details, and we'll assist you in the recovery process.",
    "what training resources are available for new users?": "New users can access training resources in the 'Training' or 'Learning Center' section. For personalized training sessions, contact our training department to schedule a session.",
    "can i use PUCAR15 on multiple devices?": "Yes, you can use PUCAR15 on multiple devices. Ensure you're using the latest version and log in with your credentials to access your account across devices.",
    "how do i update my contact information?": "You can update your contact information in the 'Profile' or 'Account Settings' section. If you need assistance, contact our support team for guidance.",
    "i'm getting a 'session expired' message": "If you're receiving a 'session expired' message, try logging out and logging back in. If the issue persists, contact our support team for further assistance.",
    "what training is available for advanced features?": "Advanced feature training sessions are available upon request. Contact our training department to schedule a session and enhance your skills.",
    "i need assistance with a system integration": "For assistance with system integration, reach out to our integration support team. Provide details about your integration requirements for personalized guidance.",
    "how do i access historical call data?": "Historical call data can usually be accessed in the 'Reports' or 'Analytics' section. If you need specific information, contact support for customized report generation.",
    "can i change my username?": "Username changes are typically managed by administrators. Contact your IT administrator or support team to request a username change.",
    "i'm having trouble with the mobile app": "For mobile app issues, ensure you're using the latest version. If problems persist, uninstall and reinstall the app or contact our mobile support team for assistance.",
    "what is the process for updating emergency contact information?": "Emergency contact information can be updated in the 'Emergency Contacts' or 'Profile' section. If you need assistance, contact support for guidance.",
    "pucar is not working": "PUCAR15 is primarily designed for online use. If you require offline functionality, contact our support team to discuss potential solutions or workarounds.",
    "internet is not working": "Check internet icon is connected or not, or call 2574.",
    "default": "I can't understand. Please contact Helpdesk team."
  }

  getBotAnswer(msg: any) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: any) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}

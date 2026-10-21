import { useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const predefinedResponses: Record<string, { en: string; ar: string }> = {
  'admission': {
    en: 'To apply to ENS-SM, you need to pass the national competition organized by the Ministry of Higher Education. Visit our Admission section for more details.',
    ar: 'لتقديم طلب التسجيل في المدرسة العليا لأساتذة الصم والبكم، يجب اجتياز المسابقة الوطنية المنظمة من طرف وزارة التعليم العالي. ز قسم القبول لمزيد من التفاصيل.',
  },
  'programs': {
    en: 'ENS-SM offers 14 specializations in the Master\'s program including Orthophony, Sign Language Pedagogy, Hearing Devices Technology, and more.',
    ar: 'تقدم المدرسة العليا لأساتذة الصم والبكم 14 تخصصاً في برنامج الماستر بما في ذلك تقويم النطق، بيداغوجيا لغة الإشارة، تكنولوجيا أجهزة السمع، والمزيد.',
  },
  'location': {
    en: 'ENS-SM is located in Beni Messous, Algiers, Algeria.',
    ar: 'تقع المدرسة العليا لأساتذة الصم والبكم في بني مسوس، الجزائر العاصمة، الجزائر.',
  },
  'contact': {
    en: 'You can contact us through the Contact section on our website or follow us on our official Facebook page.',
    ar: 'يمكنك التواصل معنا من خلال قسم اتصل بنا على موقعنا الإلكتروني أو متابعتنا على صفحتنا الرسمية على فيسبوك.',
  },
  'fees': {
    en: 'For information about tuition fees, please contact the administration directly through the Contact section.',
    ar: 'لمعرفة معلومات حول الرسوم الدراسية، يرجى الاتصال بالإدارة مباشرة من خلال قسم اتصل بنا.',
  },
  ' deaf': {
    en: 'ENS-SM is the first institution in Africa and the Arab World specialized in training teachers for deaf and hearing-impaired students.',
    ar: 'المدرسة العليا لأساتذة الصم والبكم هي المؤسسة الأولى في أفريقيا والعالم العربي المتخصصة في تدريب المعلمين للطلاب الصم وضعاف السمع.',
  },
  'default': {
    en: 'Thank you for your question! For more detailed information, please visit our website sections or contact us directly. You can also follow our official Facebook page for latest updates.',
    ar: 'شكراً على سؤالك! لمزيد من المعلومات المفصلة، يرجى زيارة أقسام موقعنا الإلكتروني أو التواصل معنا مباشرة. يمكنك أيضاً متابعة صفحتنا الرسمية على فيسبوك لأحدث التحديثات.',
  },
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hello! I\'m here to help you learn more about ENS-SM. How can I assist you today?\n\nمرحباً! أنا هنا لمساعدتك في معرفة المزيد عن المدرسة العليا لأساتذة الصم والبكم. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    let isArabic = false;
    
    if (lowerInput.includes('مرحبا') || lowerInput.includes('سلام') || lowerInput.includes('شكرا') || 
        lowerInput.includes('القبول') || lowerInput.includes('التسجيل') || lowerInput.includes('البرامج') ||
        lowerInput.includes('موقع') || lowerInput.includes('تواصل') || lowerInput.includes('الرسوم') ||
        lowerInput.includes('صم') || lowerInput.includes('المدرسة') || lowerInput.includes('جزائر')) {
      isArabic = true;
    }

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key)) {
        return isArabic ? response.ar : response.en;
      }
    }
    
    return isArabic ? predefinedResponses.default.ar : predefinedResponses.default.en;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const botResponse: Message = { role: 'bot', content: getResponse(input) };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">ENS-SM Assistant</h3>
                <p className="text-white/70 text-xs">Online • متصل</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-sm'
                      : 'bg-white text-gray-800 shadow-md rounded-bl-sm whitespace-pre-line'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white shadow-md p-3 rounded-2xl rounded-bl-sm">
                  <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about the school... / اسأل عن المدرسة..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
import { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationContextType {
  notifications: any[];
  setNotifications: (notifications: any[]) => void;
  templates: any[];
  setTemplates: (templates: any[]) => void;
  campaigns: any[];
  setCampaigns: (campaigns: any[]) => void;
  selectedTemplate: any | null;
  setSelectedTemplate: (template: any | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  setNotifications: () => {},
  templates: [],
  setTemplates: () => {},
  campaigns: [],
  setCampaigns: () => {},
  selectedTemplate: null,
  setSelectedTemplate: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [templates, setTemplates] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setNotifications,
        templates,
        setTemplates,
        campaigns,
        setCampaigns,
        selectedTemplate,
        setSelectedTemplate,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

// pages/index.js
import { Shield } from 'lucide-react';
import MenuButton from '../components/MenuButton';

export default function Home() {
  const menuItems = [
    { 
      id: 'page-checker', 
      icon: 'check', 
      label: 'Page Checker', 
      links: [
        "https://www.facebook.com/account_status",
        "https://www.facebook.com/support/?tab_type=APPEALS",
        "https://www.facebook.com/settings/?tab=profile_recommendations&show_recommendable_nux=0",
        "https://www.facebook.com/settings/?tab=profile_management_history"
      ]
    },
    { 
      id: 'profile-checker', 
      icon: 'user', 
      label: 'Profile Checker', 
      links: [
        "https://www.facebook.com/account_status",
        "https://www.facebook.com/accountquality",
        "https://business.facebook.com/billing_hub/payment_activity?asset_id=",
        "https://www.facebook.com/id/hub/",
        "https://business.facebook.com/latest/monetization/monetization_policy_issues/monetization_policy_issues_violations?asset_id=",
        "https://www.facebook.com/support/?tab_type=APPEALS",
        "https://www.facebook.com/settings/identity_confirmation/",
        "https://www.facebook.com/primary_location/info?_rdc=2&_rdr",
        "https://adsmanager.facebook.com/adsmanager/manage/ad_account_settings/ad_account_setup",
        "https://business.facebook.com/business-support-home/contact-support",
        "https://adsmanager.facebook.com/adsmanager/manage/accounts?act="
      ]
    },
    { 
      id: 'bm-checker', 
      icon: 'briefcase', 
      label: 'BM Checker', 
      links: [
        "https://business.facebook.com/billing_hub/payment_activity?asset_id=",
        "https://business.facebook.com/latest/settings/ad_accounts?business_id=",
        "https://business.facebook.com/latest/monetization/monetization_policy_issues/monetization_policy_issues_violations?asset_id=",
        "https://business.facebook.com/latest/settings/pages?business_id=",
        "https://business.facebook.com/latest/settings/business_users?business_id=",
        "https://business.facebook.com/business-support-home",
        "https://business.facebook.com/billing_hub/accounts?business_id="
      ]
    },
    { 
      id: 'new-account', 
      icon: 'broom', 
      label: 'New Account Checker', 
      links: [
        "https://www.facebook.com/profile_status/?referrer=profile_settings",
        "https://accountscenter.facebook.com/personal_info",
        "https://www.facebook.com/your_information/?tab=your_information&tile=personal_info_grouping",
        "https://accountscenter.facebook.com/password_and_security",
        "https://www.facebook.com/notifications",
        "https://www.facebook.com/business-support-home/"
      ]
    },
    { 
      id: 'admins', 
      icon: 'user-cog', 
      label: 'Admins Manager', 
      links: [
        "https://www.facebook.com/settings/?tab=profile_access"
      ]
    },
    { 
      id: 'country', 
      icon: 'globe', 
      label: 'Country Restriction', 
      links: [
        "https://www.facebook.com/settings/?tab=followers_and_public_content"
      ]
    },
    { 
      id: 'block-country', 
      icon: 'eye-off', 
      label: 'Block This Country List', 
      links: [
        "https://docs.google.com/spreadsheets/d/1U5jWY0yoIXgkGRgbJfXnhu5dF44zhgG0xibXQvlwZyY/edit?usp=sharing"
      ]
    },
    { 
      id: 'moderation', 
      icon: 'tool', 
      label: 'Moderation Assist', 
      links: [
        "https://www.facebook.com/professional_dashboard/moderation_assist"
      ]
    },
    { 
      id: 'blocking', 
      icon: 'eye-off', 
      label: 'Manage Blocking', 
      links: [
        "https://www.facebook.com/settings/?tab=blocking"
      ]
    },
    { 
      id: 'amanda', 
      icon: 'users-slash', 
      label: 'Amanda List', 
      links: [
        "https://docs.google.com/spreadsheets/d/1MlYBJMeDeqo5uoQ4KpeE26EPS7z9FxJZD2wnmHPYikg/edit?usp=sharing"
      ]
    },
    { 
      id: 'page-creator', 
      icon: 'plus', 
      label: 'FB Page Creator', 
      links: [
        "https://www.facebook.com/pages/creation/"
      ]
    },
    { 
      id: 'group-creator', 
      icon: 'users', 
      label: 'FB Group Creator', 
      links: [
        "https://www.facebook.com/groups/create/"
      ]
    }
  ];

  const videoTutorial = {
    id: 'video-tutorial',
    icon: 'video',
    label: 'Video Tutorial',
    links: ['https://youtu.be/60fJoTfKILg'],
    className: 'bg-red-500 hover:bg-red-600 mt-4'
  };

  const viralHelper = {
    id: 'viral-helper',
    icon: 'eye-off',
    label: 'LBC Viral Helper',
    links: ['https://chromewebstore.google.com/detail/kkhmkjhomgbapklfaggppdmljcieagfe'],
    className: 'bg-purple-600 hover:bg-purple-700'
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="text-center mb-6">
          <div className="bg-green-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5" />
            <h1 className="text-lg font-bold">LBC CHECKER PRO</h1>
            <Shield className="w-5 h-5" />
          </div>
        </header>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <MenuButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              links={item.links}
            />
          ))}
          
          <MenuButton {...videoTutorial} />
          <MenuButton {...viralHelper} />
        </div>

        <footer className="mt-6 text-center text-gray-500 text-sm">
          <p className="font-bold">Created with ❤️ | V1.0</p>
        </footer>
      </div>
    </main>
  );
}
import { useState } from 'react';
import { Gift, Star, Trophy, Ticket, Crown, Zap } from 'lucide-react';
import partyImage from '../PlanYourParty/party.webp';

interface RewardTier {
  name: string;
  icon: typeof Gift;
  points: number;
  benefits: string[];
  color: string;
}

export default function Rewards() {
  const [points] = useState(150);

  const tiers: RewardTier[] = [
    {
      name: 'Bronze',
      icon: Star,
      points: 100,
      benefits: [
        'Free birthday dessert',
        '5% off on orders above $30',
        'Early access to special deals'
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Silver',
      icon: Trophy,
      points: 300,
      benefits: [
        'All Bronze benefits',
        '10% off on orders above $50',
        'Priority seating',
        'Free delivery on orders above $40'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gold',
      icon: Crown,
      points: 500,
      benefits: [
        'All Silver benefits',
        '15% off on all orders',
        'VIP event invitations',
        'Exclusive menu items',
        'Free premium upgrades'
      ],
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  const challenges = [
    {
      icon: Zap,
      title: 'First Time Order',
      points: 50,
      description: 'Place your first order with us'
    },
    {
      icon: Ticket,
      title: 'Weekend Warrior',
      points: 100,
      description: 'Order 3 times during weekends'
    },
    {
      icon: Star,
      title: 'Party Host',
      points: 200,
      description: 'Book an event for 20+ people'
    }
  ];

  const getCurrentTier = () => {
    return tiers.reduce((prev, curr) => {
      if (points >= curr.points) return curr;
      return prev;
    }, tiers[0]);
  };

  const getNextTier = () => {
    return tiers.find(tier => tier.points > points);
  };

  const currentTier = getCurrentTier();
  const nextTier = getNextTier();

  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 z-10" />

      {/* Party background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${partyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-20 w-full lg:w-3/4 xl:w-2/3 p-8 rounded-xl shadow-xl bg-opacity-90 bg-gradient-to-r from-purple-800/90 to-pink-800/90 mt-4 mb-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-4 text-white text-shadow-lg">
            Party Central Rewards
          </h2>
          <p className="text-xl text-gray-100">Earn points, unlock rewards, and enjoy exclusive benefits!</p>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">Your Status</h3>
              <div className="flex items-center gap-2 mb-4">
                <currentTier.icon className={`h-6 w-6 text-${currentTier.color.split('-')[1]}-500`} />
                <span className="font-semibold text-white">{currentTier.name} Member</span>
              </div>
              <p className="text-white">Current Points: {points}</p>
            </div>

            {nextTier && (
              <div className="text-center md:text-right">
                <p className="text-sm text-white mb-2">Next Tier</p>
                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <nextTier.icon className={`h-6 w-6 text-${nextTier.color.split('-')[1]}-500`} />
                  <span className="font-semibold text-white">{nextTier.name}</span>
                </div>
                <p className="text-sm text-white">
                  {nextTier.points - points} points needed
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Reward Tiers */}
        <h3 className="text-2xl font-semibold mb-6 text-white text-shadow-lg">Reward Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-gradient-to-br ${tier.color} text-white p-6 rounded-xl ${
                points >= tier.points ? 'ring-4 ring-offset-2 ring-offset-gray-50' : 'opacity-80'
              } transform hover:scale-105 transition-all shadow-md`}
            >
              <div className="flex items-center gap-3 mb-4">
                <tier.icon className="h-8 w-8" />
                <h4 className="text-xl font-bold">{tier.name}</h4>
              </div>
              <p className="text-sm mb-4">{tier.points} points required</p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-200">
                    <Star className="h-4 w-4 flex-shrink-0 text-yellow-300" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Active Challenges */}
        <h3 className="text-2xl font-semibold mb-6 text-white text-shadow-lg">Active Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <challenge.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-xl">{challenge.title}</h4>
              </div>
              <p className="text-gray-100 text-sm mb-4">{challenge.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-yellow-300">
                  +{challenge.points} points
                </span>
                <button className="text-sm text-white font-medium hover:text-yellow-300">
                  Start Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

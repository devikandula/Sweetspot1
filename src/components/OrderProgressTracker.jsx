import React from 'react';

const OrderProgressTracker = ({ currentStage }) => {
  const checkpoints = [
    { id: 1, name: 'Order Received', icon: 'M5 13l4 4L19 7', timeOffset: -4 },
    { id: 2, name: 'Baking', icon: 'M9 20h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zM12 4a4 4 0 110 8 4 4 0 010-8z', timeOffset: -3 },
    { id: 3, name: 'Packing', icon: 'M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m0 0L4 7m8 4v10', timeOffset: -2 },
    { id: 4, name: 'Out for Delivery', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM3 8l9 6 9-6', timeOffset: -1 },
    { id: 5, name: 'Delivered', icon: 'M5 13l4 4L19 7', timeOffset: 0 },
  ];

  // Generate mock timestamps (current time minus offset hours)
  const getTimestamp = (offset) => {
    const now = new Date();
    now.setHours(now.getHours() + offset);
    return now.toLocaleString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="mb-6 p-6 bg-secondary/10 rounded-2xl sweet-card" role="region" aria-label="Order Progress Timeline">
      <h4 className="font-semibold text-lg text-primary mb-6">Order Progress</h4>
      <div className="relative">
        {/* Progress Line Background */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-muted rounded-full" />
        {/* Progress Line Foreground */}
        <div
          className="absolute top-8 left-0 h-1 bg-gradient-to-r from-primary to-sweetspot-alt1 rounded-full transition-all duration-700"
          style={{ width: `${currentStage * 20}%` }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {checkpoints.map((checkpoint) => (
            <div
              key={checkpoint.id}
              className={`relative text-center group ${
                checkpoint.id <= currentStage ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {/* Checkpoint Circle */}
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 sweet-card ${
                  checkpoint.id <= currentStage
                    ? 'bg-gradient-to-br from-primary to-sweetspot-alt1 text-primary-foreground'
                    : 'bg-muted/50'
                } group-hover:scale-110 group-hover:shadow-glow`}
                role="img"
                aria-label={checkpoint.name}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={checkpoint.icon} />
                </svg>
              </div>
              {/* Checkpoint Label */}
              <p
                className={`mt-2 text-sm font-medium ${
                  checkpoint.id <= currentStage ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {checkpoint.name}
              </p>
              {/* Timestamp */}
              <p
                className={`text-xs ${
                  checkpoint.id <= currentStage ? 'text-primary/80' : 'text-muted-foreground/60'
                }`}
              >
                {checkpoint.id <= currentStage ? getTimestamp(checkpoint.timeOffset) : 'Pending'}
              </p>
              {/* Tooltip on Hover */}
              <div className="absolute hidden group-hover:block bg-popover text-popover-foreground text-xs p-2 rounded-lg shadow-sweet z-10 -top-10 left-1/2 transform -translate-x-1/2 w-max max-w-xs">
                {checkpoint.id <= currentStage
                  ? `${checkpoint.name} completed at ${getTimestamp(checkpoint.timeOffset)}`
                  : `Awaiting ${checkpoint.name}`}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        Stage {currentStage} of {checkpoints.length}
      </p>
    </div>
  );
};

export default OrderProgressTracker;
const itinerary = {
   _activities: {
      morning: [
         'grab breakfast at the Issaquah cafe', 
         'take a morning walk along Lake Washington Boulevard', 
         "grab Mochinuts at Lam's Vietnamese Market", 
         'try out a new brew at Anchorhead Coffee', 
         'try a local favorite downtown at Biscuit B*tch', 
         'peruse the flower stalls at Pike Place Market', 
         "sleep in and wait for the rain to pass", 
         'get an early start at the Olympic Sculpture Park',
         'go for an early morning walk in Discovery Park',
         'beat the crowds with a morning hike up Little Si'
      ],
      afternoon: [
         'take a stroll in Kubota gardens',
         'visit the Bellevue Botanical gardens',
         'take a whale-watching cruise',
         'grab lunch at Pike Place Market',
         'take in Snoqualmie Falls',
         'drive south for vistas of Mt. Rainier',
         'visit the Chihuly Garden and Glass museum',
         'watch the salmon (and seals) at the Ballard Locks',
         'visit the Seattle Aquarium',
         'appreciate the works on display at the Seattle Art Museum'
      ],
      evening: [
         'explore along the waterfront at Alaska Way',
         'take in the view of downtown from Kerry Park',
         'grab a drink the rotating bar at the Spaceneedle',
         'hear the Seattle Opera perform',
         'go to a drag show at Queer Bar in Capitol Hill',
         'grab dinner in Ballard',
         'try your luck at Snoqualmie or Muckleshoot casino',
         'grab some amazing pho and banh mi in Little Saigon',
         'drive out to Alki to see the Seattle skyline at night and grab some great seafood',
         'light up a beach bonfire at Golden Gardens park'
      ]
   }, 
   get morningActivities() {
      return this._activities.morning;
   },
   get afternoonActivities() {
      return this._activities.afternoon;
   },
   get eveningActivities() {
      return this._activities.evening;
   },
   set morningActivity(mActIn) {
      this._activities.morning.push(mActIn);
   },
   set afternoonActivity(aActIn) {
      this._activities.afternoon.push(aActIn);
   },
   set eveningActivity (eActIn) {
      this._activities.evening.push(eActIn);
   },
   getRandomActivity(timeOfDay) {
      const activity = this._activities[timeOfDay];
      let num = Math.floor(Math.random() * activity.length);
      return activity[num];
   },
   generateRandomItinerary() {
      const morningActivity = this.getRandomActivity('morning');
      const afternoonActivity = this.getRandomActivity('afternoon');
      const eveningActivity = this.getRandomActivity('evening');
      return `Today is a beautiful day for a Seattle adventure.\n\tIn the morning, ${morningActivity}.\n\tIn the afternoon, ${afternoonActivity}.\n\tTo round out your day, ${eveningActivity} in the evening.`;
   }
}
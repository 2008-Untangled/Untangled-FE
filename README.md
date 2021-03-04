![Logo](https://github.com/2008-Untangled/Untangled-FE/blob/main/assets/logomedium.png)
# Untangled - A Digital Memory Palace
## Developers
#### Frontend
[Bryce Mara Jarrett](https://github.com/brycemara)

[Joe Lopez](https://github.com/Codo-Baggins)

[Cameron Romo](https://github.com/cameronRomo)

[Estelle Staffieri](https://github.com/Estaffieri)

#### Backend
[Grant Dempsey](https://github.com/GDemps)

[Jesse Mellinger](https://github.com/JesseMellinger)

[Eduardo Parra](https://github.com/helloeduardo)

[Sean Steel](https://github.com/s-steel)

## About Project
  This project was made from the idea of helping those with Dementia and Alzheimers recall memories using the memory palace technique. We created an illustrated
  home with rooms that hold clickable memories. Given our understanding of our user we designed this application specifically for ipad use. We also chose not to       implement an authorization feature in this iteration as it isn't helpful for our Users to be frustrated by a password.
  
  The memory palace technique is a way to help strengthen recall by tying a memory to an object, that isn't necessarily related to the memory. Whenever you want to   visit that moment you bring up the object it was associated with. With this project we tried to engage the senses with seeing old photos, describing the events,     listing smells and in future songs they loved or heard at the time.
  
  For this project we used: ```React Native | Expo Cli | XCode | Jest | React-Testing-Library | React Native Paper```
     
## How to Run 
Clone down both FE & BE repos to your local machine.

Download [expo cli](https://expo.io/tools#cli)

Download [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

In your terminal cd: into your cloned down repo.
Run: ``` npm install ```

Once the install is finished run:
``` npm start ```

and when you see "Starting Metro Bundler" in your terminal enter:
``` shift + i```  and choose iPad Air 4th generation to launch the ios simulator

 In the simulator open the expo cli app on the tool bar and launch the app!
 
 You should now see the homepage of the application!


## Our Approach
This first challenge we tackled was how to build a digital house and how our user might understand to navigate through them. The memories would be assocaited with items in each room and once clicked on, a memory modal pops up with the memory image, a description of the memory and aromas. They do have the option from the memory modal to either edit the memory or to go back to the room. This is our wireframe for this iteration.
  
<img src=https://github.com/2008-Untangled/Untangled-FE/blob/main/assets/Untangled%20Wireframe.png width=600 height=600/>

![A screen capture of Untangled](https://media.giphy.com/media/vhMtgdAJyY7iwwtIKU/giphy.gif)

  
## Future Features
- Allow user to add or remove rooms
- Use Puppeteer to give user a tour through the house and the memories within it 
- Authentication for each user to have a unique memory landscape
- Memories can be added by the users family and friends
- Music plays automatically for memories
- Music can be turned off from each room
- Additional endpoints for rooms and memories
- Add voice-overs to read memories
- Provide alternate home illustrations for different living situations

## Credits
 [Tellu](https://ui8.net/telllu/products/stay-at-home-modular-scenes) The base illustrations for house and that we could build off of!
 
 [The Noun Project](https://thenounproject.com/) Icons


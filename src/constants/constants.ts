import { APODsType } from "@/types/types";

export const APODUrl = "https://api.nasa.gov/planetary/apod";
export const CopyToClipboard = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
export const APODFullUrl = APODUrl + "?api_key=" + process.env.N_DATA_API_KEY!;

export const HeroSlogan = "Your Gateway to the Cosmos";

export const BackgroundImageCreatorLink = "https://www.pexels.com/@pixabay/";
export const APODLink = "https://api.nasa.gov/planetary/apod";
export const ProjectSourceCode = "https://github.com/shang-kyimin/spacesurfing";

export const StartLoaderDate = "1995-07-09";
export const InitialImages: APODsType = [
  {
    "date": "1995-06-16",
    "explanation": "Today's Picture:    Explanation:  If the Earth could somehow be transformed to the ultra-high density of a neutron star , it might appear as it does in the above computer generated figure. Due to the very strong gravitational field, the neutron star distorts light from the background sky greatly. If you look closely, two images of the constellation Orion are visible. The gravity of this particular neutron star is so great that no part of the neutron star is blocked from view - light is pulled around by gravity even from the back of the neutron star.   We keep an  archive file.  Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert Nemiroff and Jerry Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/e_lens.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Neutron Star Earth",
    "url": "https://apod.nasa.gov/apod/image/e_lens.gif"
  },
  {
    "date": "1995-06-20",
    "explanation": "Today's Picture: June 20, 1995    The Pleiades Star Cluster  Picture Credit: Mount Wilson Observatory  Explanation:  The Pleiades star cluster, M45, is one of the brightest star clusters visible in the northern hemisphere. It consists of many bright, hot stars that were all formed at the same time within a large cloud of interstellar dust and gas. The blue haze that accompanies them is due to very fine dust which still remains and preferentially reflects the blue light from the stars.   We keep an archive of previous Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/pleiades2.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Pleiades Star Cluster",
    "url": "https://apod.nasa.gov/apod/image/pleiades2.gif"
  },
  {
    "date": "1995-06-21",
    "explanation": "Today's Picture: June 21, 1995    The Aftermath of the Great Supernova in 1987  Picture Credit: Hubble Space Telescope  Explanation:  In 1987 a star in one of the Milky Way's satellite galaxies exploded. In 1994 the Hubble Space Telescope, in orbit around the earth, took a very detailed picture of the remnants of this explosion. This picture, above, showed unusual and unexpected rings, and astronomers are not sure how they formed.  For more information see HST press release.  We keep an archive of previous Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/sn1987a_hst.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Supernova 1987a Aftermath",
    "url": "https://apod.nasa.gov/apod/image/sn1987a_hst.gif"
  },
  {
    "date": "1995-06-22",
    "explanation": "In 1972 Astronauts on the United States's last lunar mission, Apollo 17, took this picture looking back at the Earth on their way to the moon. The continents of Antarctica and Africa are visible below the delicate wisps of white clouds.  For more information see NASA NSSDC press release.  We keep an archive of previous Astronomy Pictures of the Day.   The sky is filled with breathtaking pictures, many of which are available on the World Wide Web. Each day we feature a different picture of some part of our fascinating universe, along with a brief explanation written by a professional astronomer.  Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/earth_a17.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Earth from Apollo 17",
    "url": "https://apod.nasa.gov/apod/image/earth_a17.gif"
  },
  {
    "date": "1995-06-23",
    "explanation": "What if you could \"see\" gamma rays? This computer processed image represents a map of the entire sky at photon energies above 100 million electron Volts. These gamma-ray photons are more than 40 million times more energetic than visible light photons and are blocked from the Earth's surface by the atmosphere. In the early 1990s NASA's Compton Gamma Ray Observatory, in orbit around the Earth, scanned the entire sky to produce this picture. A diffuse gamma-ray glow from the plane of our Milky Way Galaxy is clearly seen across the middle. The nature and even distance to some of the fainter sources remain unknown.  For more information see Compton Science Support Center release.   We keep an archive of previous Astronomy Pictures of the Day.   The sky is filled with breathtaking pictures, many of which are available on the World Wide Web. Each day we feature a different picture of some part of our fascinating universe, along with a brief explanation written by a professional astronomer.  Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/egret_gro.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Gamma Ray Sky Map",
    "url": "https://apod.nasa.gov/apod/image/egret_gro.gif"
  },
  {
    "date": "1995-06-24",
    "explanation": "The Crab Nebula and Geminga in Gamma Rays  Picture Credit: NASA, Compton Gamma Ray Observatory  Explanation:  What if you could \"see\" in gamma-rays? If you could, these two spinning neutron stars or pulsars would be among the brightest objects in the sky. This computer processed image shows the Crab Nebula pulsar (below and right of center) and the Geminga pulsar (above and left of center) in the \"light\" of gamma-rays. Gamma-ray photons are more than 10,000 times more energetic than visible light photons and are blocked from the Earths's surface by the atmosphere. This image was produced by the high energy gamma-ray telescope \"EGRET\" on board NASA's orbiting Compton Observatory satellite. For more information see Compton Science Support Center release.   We keep an archive of previous Astronomy Pictures of the Day.   The sky is filled with breathtaking pictures, many of which are available on the World Wide Web. Each day we feature a different picture of some part of our fascinating universe, along with a brief explanation written by a professional astronomer.  Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/gamma_crab.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Gamma Ray Crab, Geminga",
    "url": "https://apod.nasa.gov/apod/image/gamma_crab.gif"
  },
  {
    "date": "1995-06-25",
    "explanation": "Today's Picture: June 25, 1995    Jupiter from Voyager  Picture Credit: NASA, JPL, NSSDC, Voyager  Explanation:  Imagine a hurricane that lasted for 300 years! This picture of the planet Jupiter was taken by the Voyager 1 spacecraft as it passed the planet in 1979. Jupiter, a gas giant planet with no solid surface, is the largest planet in the solar system and is made mostly of the hydrogen and helium. Clearly visible in the photo is the Great Red Spot, a giant, hurricane-like storm system that rotates with the clouds of Jupiter. It is so large three complete Earths could fit inside it. Astronomers have observed this giant storm on Jupiter for over 300 years.  For more information see NASA Jet Propulsion Laboratory release.   We keep an archive of previous Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/jupiter1_vgr.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Jupiter from Voyager",
    "url": "https://apod.nasa.gov/apod/image/jupiter1_vgr.gif"
  },
  {
    "date": "1995-06-26",
    "explanation": "Today's Picture: June 26, 1995    The Spiral Galaxy M100  Picture Credit: NASA, Hubble Space Telescope  Explanation:  The M100 galaxy is a large spiral galaxy similar to our own Milky Way, containing over 100 billion stars. It is over 150 million light years away, so the light we see left when dinosaurs roamed the Earth. The picture was taken in 1993 with the Wide Field and Planetary Camera 2 on board the Hubble Space Telescope.  For more information see NASA Space Telescope Scientific Institute press release.   We keep an archive of previous Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/m100_hst.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Spiral Galaxy M100",
    "url": "https://apod.nasa.gov/apod/image/m100_hst.gif"
  },
  {
    "date": "1995-06-27",
    "explanation": "Today's Picture: June 27, 1995    An Ultraviolet Image of Messier 101  Picture Credit: NASA, Ultraviolet Imaging Telescope (UIT) Explanation:  This giant spiral galaxy, Messier 101 (M101), was photographed by the Ultraviolet Imaging Telescope onboard the Space Shuttle Endeavour during the Astro-2 mission (March 2 - 18, 1995). The image has been computer processed so that the colors represent the intensity of ultraviolet light. Pictures of galaxies like this one show mainly clouds of gas containing newly formed stars many times more massive than the sun, which glow strongly in ultraviolet light. In contrast, visible light pictures of galaxies tend to be dominated by the yellow and red light of older stars. Ultraviolet light, invisible to the human eye, is blocked by ozone in the atmosphere so ultraviolet pictures of celestial objects must be taken from space.  For more information see NASA Astro-2 UIT release.   We keep an archive of previous Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/uitm101.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "An Ultraviolet Image of M101",
    "url": "https://apod.nasa.gov/apod/image/uitm101.gif"
  },
  {
    "date": "1995-06-28",
    "explanation": "Today's Picture: June 28, 1995    The Cat's Eye Nebula  Picture Credit: NASA, Hubble Space Telescope  Explanation:  Three thousand light years away, a dying star throws off shells of glowing gas. This Hubble Space Telescope image reveals \"The Cat's Eye Nebula\" to be one of the most complex \"planetary nebulae\" known. In fact, the features seen in this image are so complex that astronomers suspect the visible central star may actually be a double star system. The term planetary nebula, used to describe this general class of objects, is misleading. Although these objects may appear round and planet-like in small telescopes, high resolution images reveal them to be stars surrounded by cocoons of gas blown off in the late stages of evolution.  Latest APOD Featuring this Image: July 4, 1996  For more information see NASA Space Telescope Scientific Institute press release.   We keep an archive of previous Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/catseye.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Cat's Eye Nebula",
    "url": "https://apod.nasa.gov/apod/image/catseye.gif"
  },
  {
    "date": "1995-06-29",
    "explanation": "June 29, 1995    The Earth-Moon System  Picture Credit: NASA, JPL, Galileo Project Explanation:  A double planet? From 4 million miles away on December 16, 1992, NASA's robot spacecraft Galileo took this picture of the Earth-moon system. The bright, sunlit half of the Earth contrasts strongly with the darker subdued colors of the moon. Our moon is one of the largest moons in the solar system. It is even larger than the planet Pluto. In this picture, the Earth-moon system actually appears to be a double planet.  For more information see NASA, Jet Propulsion Laboratory press release.   We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/earthmoon.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Earth-Moon System",
    "url": "https://apod.nasa.gov/apod/image/earthmoon.gif"
  },
  {
    "date": "1995-06-30",
    "explanation": "June 30, 1995    Ida and Dactyl: Asteroid and Moon  Picture Credit: NASA, JPL, Galileo Project Explanation:  An asteroid with a moon! The robot spacecraft Galileo whose primary mission is to explore the Jupiter system, has encountered and photographed two asteroids during its long journey to Jupiter. The second asteroid it photographed, called Ida, was discovered to have a moon which appears as a small dot to the right of Ida in this picture. The tiny moon, named Dactyl, is about one mile across, while the potato shaped Ida measures about 36 miles long and 14 miles wide. Dactyl is the first moon of an asteroid ever discovered. The names Ida and Dactyl are based on characters in Greek mythology.   For more information see NASA, Jet Propulsion Laboratory press release.   We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/idadactyl.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Ida and Dactyl: Asteroid and Moon",
    "url": "https://apod.nasa.gov/apod/image/idadactyl.gif"
  },
  {
    "date": "1995-07-01",
    "explanation": "July 1, 1995    The Hooker Telescope on Mt. Wilson  Picture Credit: Mount Wilson Observatory Explanation:  In the 1920s, pictures from the Hooker Telescope on Mt. Wilson fundamentally changed our understanding of the cosmos. Astronomer Edwin Hubble, using photographs he took with this telescope, demonstrated that the objects his contemporaries called \"spiral nebulae\" were actually huge systems of stars - spiral galaxies, similar to our own Milky Way galaxy but incredibly distant. Prior to Hubble's work it was argued that the spiral nebulae were mere clouds of gas and that they, along with everything else in the universe, were contained in our own galaxy. The Hooker Telescope mirror is 100 inches in diameter which is nearly the size of the mirror of the orbiting Hubble Space Telescope named in Hubble's honor. The Mount Wilson Observatory offers a \"virtual walking tour\" of this historic telescope.  For more information see Mount Wilson Observatory Historical Image Archives   We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/hooker.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Hooker Telescope on Mt. Wilson",
    "url": "https://apod.nasa.gov/apod/image/hooker.gif"
  },
  {
    "date": "1995-07-02",
    "explanation": "July 2, 1995    The Cartwheel Galaxy  Picture Credit: NASA, Hubble Space Telescope  Explanation:  The Cartwheel Galaxy shows a ring that is the result of a collision between a small and a large galaxy. After a small galaxy has moved through a big galaxy - in this case one that probably resembled our own Milky Way - a star formation wave moves out from the impact point like ripples across the surface of a pond. When galaxies collide it is rare that any two stars actually collide. Gravity, however, causes density waves to move out through the galaxy which in turn triggers the formation of hot, bright young stars, producing the ring that we see in this picture.  For more information see NASA, Hubble Space Telescope Scientific Institute press release.   We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/cartwheel_hst.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Cartwheel Galaxy",
    "url": "https://apod.nasa.gov/apod/image/cartwheel_hst.gif"
  },
  {
    "date": "1995-07-03",
    "explanation": "July 3, 1995    The Great Nebula in Orion  Picture Credit: NASA, Hubble Space Telescope  Explanation:  The Great Nebula in Orion, M42, can be found on the night sky just below and to the left of the easily identifiable belt of three stars in the popular constellation Orion. This nebula is one of the closest stellar nurseries - where young stars are being formed even now. Clumps of gas (mostly hydrogen and helium) and dust in the nebula are squeezed together by their own gravity until they collapse and form stars. Some stars we can see here partially obscured by the nebula, are only about 100,000 years old - just babies compared to the 5 billion (5,000,000,000) years of our Sun.  For more information see NASA, Hubble Space Telescope Scientific Institute press release.   We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/orion_hst.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Great Nebula in Orion",
    "url": "https://apod.nasa.gov/apod/image/orion_hst.gif"
  },
  {
    "date": "1995-07-04",
    "explanation": "July 4, 1995    The Firework Nebula  Picture Credit: WIYN Telescope  Explanation:  The Firework Nebula, known to astronomers as \"GK Per\", is the result of a type of stellar explosion called a nova. In a nova, a very compact star called a white dwarf blasts away gas that had accumulated on its surface. In this case the nova occurred in the year 1901 and is called Nova Persei 1901. This nova became as bright as one of the brighter stars we see in the night sky, but then faded until only a telescope could see it. Soon astronomers could see an expanding shell of gas that eventually became this spectacular nebula. The unusual \"fireworks\" type feature of this nebula is still a matter of research and discussion.  For more information see the  Wiyn Telescope press release.   We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/fireworks_wiyn.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Firework Nebula",
    "url": "https://apod.nasa.gov/apod/image/fireworks_wiyn.gif"
  },
  {
    "date": "1995-07-05",
    "explanation": "July 5, 1995    The Night Side of Saturn  Picture Credit: NASA, Jet Propulsion Laboratory,Voyager Project Explanation:  This image of Saturn was made in November 1980 by the Voyager 1 spacecraft as it flew past the ringed gas giant planet. From a spectacular vantage point, looking back toward the inner solar system, the robot spacecraft recorded this view of the night side of Saturn casting a sharp shadow across the bright rings. No Earth based telescope could ever take a similar picture. Since Earth is closer to the sun than Saturn, only the day side of the planet is visible from the Earth.  For more information see Calvin J. Hamilton's Saturn Page.  We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/saturn_night.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Night Side of Saturn",
    "url": "https://apod.nasa.gov/apod/image/saturn_night.gif"
  },
  {
    "date": "1995-07-06",
    "explanation": "July 6, 1995    Saturn, Rings, and Two Moons  Picture Credit: NASA, Jet Propulsion Laboratory,Voyager Project Explanation:  This image of Saturn was made by NASA's robot spacecraft Voyager 2 as it began to explore the Saturn system in 1981. Saturn's famous rings are visible along with two of its moons, Rhea and Dione which appear as faint dots in the right and lower right part of the picture. Astronomers believe that Saturn's moons play a fundamental role in sculpting its elaborate ring system.  For more information about the picture see the NASA, JPL press release.  We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/saturn_2moons.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Saturn, Rings, and Two Moons",
    "url": "https://apod.nasa.gov/apod/image/saturn_2moons.gif"
  },
  {
    "date": "1995-07-07",
    "explanation": "July 7, 1995    Lunar Farside from Apollo 13  Picture Credit: NASA, Crew of Apollo 13 Explanation:  In April of 1970, after an explosion damaged their spacecraft, the Apollo 13 astronauts were forced to abandon their plans to make the third manned lunar landing. Still, while coasting around the moon in their desperate attempt to return to earth they were able to photograph the moon's far side. The large, dark, smooth looking feature on the left in this picture is known as the \"Mare Moscoviense\". It was created by a lava flow filling in a large impact crater on the lunar surface. As suggested by the name, the Mare Moscoviense was first photographed by an early Soviet lunar probe.  For more information about the picture see the NASA photo caption.  We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/farside_a13.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Lunar Farside from Apollo 13",
    "url": "https://apod.nasa.gov/apod/image/farside_a13.gif"
  },
  {
    "date": "1995-07-08",
    "explanation": "July 8, 1995   Damage to Apollo 13  Picture Credit: NASA, Crew of Apollo 13 Explanation:  In April of 1970, after an oxygen tank exploded and damaged their service module, the Apollo 13 astronauts were forced to abandon their plans to make the third manned lunar landing. The extent of the damage is revealed in this photo, taken as the crippled module was drifting away - jettisoned prior to their reentry and eventual safe splashdown. An entire panel on the right side of the module is seen to have been blown away and damage to internal structures is apparent.  For more information about the picture see the NASA photo caption.  We keep an archive of Astronomy Pictures of the Day.   Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.",
    "hdurl": "https://apod.nasa.gov/apod/image/a13_servicemod.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "Damage to Apollo 13",
    "url": "https://apod.nasa.gov/apod/image/a13_servicemod.gif"
  }
];

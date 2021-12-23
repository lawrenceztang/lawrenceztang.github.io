<!DOCTYPE HTML>
<!--
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Lawrence Tang</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header">
						<div class="logo">
							<span class="icon fa-gem"></span>
						</div>
						<div class="content">
							<div class="inner">
								<h1>Lawrence Tang</h1>
								<p>I like to code and try new things.</p>
							</div>
						</div>
						<nav>
							<ul>
								<li><a href="#intro">Intro</a></li>
								<li><a href="#experiences">Experiences</a></li>
								<li><a href="#projects">Side Projects</a></li>
								<li><a href="#hobbies">Hobbies</a></li>
								<li><a href="#contact">Contact</a></li>
							</ul>
						</nav>
					</header>

				<!-- Main -->
					<div id="main">

						<!-- Intro -->
							<article id="intro">
								<h2 class="major">Intro</h2>
								<span class="image main"><img src="images/pic01.jpg" alt="" /></span>
								<p>My name is Lawrence, and I'm a second year computer science and math student at the University of Chicago. 
							</article>

						<!-- My Experiences -->
							<article id="experiences">
								<h2 class="major">Experiences</h2>
								<a href="#experience_2">
									<span class="image main"><img src="images/pic02.jpg" alt="" /></span>
									<h3>Argonne National Laboratory</h3>
								</a>
								<hr>
								<a href="#experience_1">
									<span class="image main"><img src="images/pic02.jpg" alt="" /></span>
									<h3>The HRI Lab at the University of Chicago</h3>
								</a>
							</article>

							<article id="experience_1">
								<p> My first formal research experience was in my first year of college at the <a href="https://hri.cs.uchicago.edu/people.html">Human-Robotic Interaction (HRI) Lab</a> at UChicago. I found out about the position from an email on a mailing list that said they were a new lab looking for research assistants to program robots. Because I had some spare time on my hands outside of classes, I emailed the PI of the lab, Sarah Sebo, saying that I was interested in the position and qualified myself by saying I had experience working on computer vision in robots. What I didn’t realize is that robotics is a huge subfield of computer science that makes use of many tools that I did not know yet. </p>
								<p>The first project involved creating a ROS wrapper around an API used to control Anki’s Vector—a cute robot with a little forklift that can move around and a screen to display facial expressions. I had never even heard of ROS before, so I was worried about being able to contribute. Fortunately, I had a coworker, <a href="https://spencerng.me/">Spencer Ng</a>, who seemed to be a ROS veteran (and expert at programming in general). After he, Sarah, and I had our first lab meeting, I took initiative and asked Spencer if we could have a chat. We talked a bit and arranged times where we could call and work on the project together. I was always a step behind what he did, but he helped me learn the foundations of ROS. He also showed me how to document work in a readme using Markdown, and many other important conventions that come with working on a team. He did the brute of the work, but I made sure to check over what he did and made a few commits to the project repository to make Sarah happy. </p>
								<p>Over the rest of the year, I gained confidence in my ROS skills. I was able to work individually on writing a ROS wrapper for the Misty robot by Misty Robotics. When I had trouble accessing Misty’s audio input, I narrowed the problem down to a hardware issue. I contacted Misty Robotics about this, and I had a Zoom call with some of their developers to inspect Misty’s hardware. When the problem was still not fixed, I helped connect Sarah to Misty’s team and arrange to return Misty to get it repaired. I was able to make many contributions to the lab later in the year.</p>
								<p>My work at the HRI lab showed me how important it was to communicate in order to get help. Even though I wasn’t able to contribute to the lab much right away, by communicating with Spencer, I was able to learn from him so I was eventually able to do projects on my own. I also learned that I can grow immensely in just one year. Spencer was only one year ahead of me, but he seemed to be so much more knowledgeable. If a year ago, I saw myself now, I think it’s quite possible that I would’ve been just as amazed. In just the span of one year, I’ve grown so much, making me realize that even when some people seem so much more accomplished or experienced than me, that’s just me in a couple of years as long as I work towards my goals. Finally, maybe the coolest thing about working at the HRI lab was that I got to take Vector to my dorm, where he was quite a sensation with my friends!</p>
							</article>

							<article id="experience_2">
								<p>Sarah, my supervisor at the HRI Lab, kindly referred me to a position at Argonne for the summer after my first year in college. For most of the summer, I worked with Dr. Young Soo Park and PhD student Derek Vasquez on simulating a robot to conduct chemical experiments in a lab. I was once again thrown in the deep end, as the robotics knowledge needed to do this work was far beyond what I acquired at the HRI Lab. I started out by going over tutorials for MoveIt, but I found that without background knowledge of Gazebo and RViz, I couldn’t get a good grasp of MoveIt. So I had to learn Gazebo, a popular robotics simulation tool, by doing a series of tutorials that culminated in programming a controllable R2D2 robot. I learned about urdf files, which specify the shapes of different parts of a robot and joints that connect the parts. I also learned how to use controllers and transmissions to connect ROS to Gazebo to control the robot. Learning this ended up being very useful because I had to do a lot of tinkering with urdfs to design the model of the simulated robot. </p>
								<p>Once Derek and I finished creating the model of the robot, we had to coordinate its moving base with its arm to be able to manipulate objects. I found a package to autonomously map and navigate the robot’s MiR 200 base using its ultrasound sensors in the simulation. It was really exciting getting navigation to work because the robot could automatically navigate around chairs and tables in the environment. To control the robot’s arm, Derek got MoveIt set up. However, the gripper proved particularly troublesome. It is difficult to position the robot’s arm in such a precise position that the gripper can grab an object. Moreover, it was hard to get enough grip in the simulation to hold onto an object without it sliding through. Eventually, I decided I had to attach the gripper to the object it was grabbing by <h href="https://github.com/pal-robotics/gazebo_ros_link_attacher">programmatically</h> connecting their links. Now, I could navigate the robot and grab objects with it, but I still had to give the robot the ability to locate objects! I started implementing an object location algorithm using AR tags, but its accuracy was questionable and I never got it to work reliably. However, I was able to program the robot to grab and place an object with a predetermined location. </p>
								<p>The simulation was an important step for our group because we didn’t want to run the physical robot without testing on a simulated one first, as the robot is really powerful and could do some serious damage. I had to focus particularly hard on maintaining good documentation and code style while working on this project so that researchers who had little experience in ROS could use my packages. I also had to communicate well with my supervisor about robotic conventions that I was often previously unaware of, and what he wanted to accomplish. Overall, this was a really tough but rewarding project that I became really dedicated to!</p>
							</article>

						<!-- Side Projects -->
							<article id="projects">
								<h2 class="major">Side Projects</h2>
								<span class="image main"><img src="images/pic02.jpg" alt="" /></span>
								<h3><a href="#project_3">Beat the Market</a></h3>
								<hr>
								<span class="image main"><img src="images/pic02.jpg" alt="" /></span>
								<h3><a href="#project_2">Popula</a></h3>
								<hr>
								<span class="image main"><img src="images/pic02.jpg" alt="" /></span>
								<h3><a href="#project_1">Chess Engine</a></h3>							
							</article>

							<article id="project_1">
								<h2 class="major">Chess Engine</h2>
								<p>A few years ago, I was really into chess. A friend told me that he made a chess game that let two people play each other in chess, and I decided that I had to one-up him by making a chess engine that searched for an optimal move on top of a playable chess game. To do this, I started out by writing the game rule engine that determines which moves are viable. This was actually very complicated due to rules like en passant, checks, and castling. Then, I wrote the graphics interface using the Java graphics library and made it responsive to clicks from the user. Then, I wrote a minimax search algorithm using the game rule engine to find valid moves and an evaluation function that adds up the values of one player’s pieces and subtracts the values of the opponent’s pieces, giving higher weight to pieces in the center of the board. The engine wasn’t very efficient and could only search around five moves ahead in a reasonable time, but it could beat most of my friends, and it was really cool that it was able to see many good moves that I missed.</p>
							</article>

							<article id="project_2">
								<h2 class="major">Popula</h2>
								<p>When I attended an Android Development summer course, one of the ideas for an app that my instructor mentioned was a prank texting app that sent fake text notifications to the user. After I got home from the course, the first thing I did was make that exact prank texting app (I totally didn’t copy his idea). It took an unexpectedly long time just to make a few app pages because I had to design the whole layout using XML, create event handlers for when the user quits out of the app, and learn how to send notifications. Creating Android apps involves learning many Android-specific things like the activity lifecycle that includes app quitting, startup, and pausing, the View class and all its subclasses which let you display to the screen, and saving app state when it is closed. I had to go through documentation of these things that made me confused and gave me headaches, but with enough experimentation, I got the app to work without any major bugs that I know of. I published it in the Google Play store, but I found that getting app downloads is a whole other problem. I don’t really have the marketing arsenal to get users without paying to advertise my app, and very few of my friends have Android phones. When you search up my app in the Play Store, it doesn’t show up! For now, I’ll be content with at least having an app published. </p>
							</article>

							<article id="project_3">
								<h2 class="major">Beat the Market</h2>
								<p>I’ve recently been really interested in investing, in the stock market in particular. When I started out as an uneducated investor, I constantly heard about day traders making a career out of trading, and I think I secretly aspired to be them because I wanted to be able to make a living day trading a bit every day and not have to work a real job. I made the website to find out if you can actually make money by looking at charts and using intuition to decide when to buy and sell. I also included some automated trading algorithms to test those out. To make the website, I had to relearn some skills from a web development Harvard Summer School course taught by David Malan (who’s apparently kind of a celebrity) that I had long forgotten. Some of these skills included programming the backend with Flask, making a pretty page with HTML and CSS, and making buttons do things with JQuery. Programming a fully-fledged website involves bringing many skills together, and it’s not all that easy to do! The advantage of being able to make websites is that now I can create something that I can show off to almost everyone I know, unlike an Android app! </p>
							</article>

						<!-- Contact -->
							<article id="contact">
								<h2 class="major">Contact</h2>
								<form method="post" action="contact-form-handler.php">
									<div class="fields">
										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="4"></textarea>
										</div>
									</div>
									<ul class="actions">
										<li><input type="submit" value="Send Message" class="primary" /></li>
										<li><input type="reset" value="Reset" /></li>
									</ul>
								</form>
								<ul class="icons">
									<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
									<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
								</ul>
							</article>

						<!-- Hobbies -->
							<article id="hobbies">
								<h2 class="major">Hobbies</h2>
								<p> When it comes to hobbies, I like to try to balance out the intense thinking involved in computer science classes and programming with activities in three categories: athletic, adventurous, and creative. </p>
								<p>In terms of athletic activities, I like to play tennis and soccer. Last year during winter quarter, when it was kind of cold to willingly go outside, I juggled a soccer ball a bunch and eventually learned to do an around the world. I also like to go to the field next to my dorm and join pick-up games, and I sometimes play with my friends. Over the summer, I played tennis with my brother almost every day. I love the feeling of hitting a powerful forehand with heavy topspin! Last quarter in school, a friend and I resolved to go on runs every day, and we mostly followed through except for during finals week. Some of the other athletic activities I enjoy include weightlifting, ice skating, and bouldering. I think physical activity is something that humans were meant to do, and it helps us stay healthy, so I try to do it every day!</p>
								<p>I also like to explore new things! Maybe I got this mindset from playing video games where I tried to collect achievements when I was younger, and now this is my new way of collecting achievements since I’m kind of over video games. I totally didn’t expect to be like this because I hated going on adventures when I was younger and just wanted to stay inside and play video games all day! Now, I like going to different cities over breaks. Last summer, some of the places I visited were the Bay Area, NYC, Boston, and Newport. Maybe I’m just tired of being at home on Cape Cod, where the median age of residents is 60! I want to eventually travel to all the countries in the world. I also like to eat at diverse types of restaurants. A recent challenge I’ve given myself is to overcome my unreasonable dislike of seafood—I ate at an all-you-can-eat sushi restaurant twice recently!</p>
								<p>I’ve found that expressing my emotion in the form of art gives me a profound sense of freedom and enjoyment. I like to write in my journal about what I accomplished each day, and all my thoughts and emotions freely. When I write down my thoughts, I can organize them and reflect on them in a logical way. If I had a nagging thought, I can just write it down and come to a solution. I also draw in my jornal. I believe art is an expression of emotion and not necessarily a literally accurate depiction of things, so I don’t focus too much on physical accuracy. I draw sort of in the same way I write—I scribble down mostly just anything that comes to mind. I organize things later if I feel the need to. I don’t read my past journal entries though, just like I don’t read my notes I take in class over again! I think it’s ok that journal entries serve primarily as a tool for the moment though—not sure about notes. I also love listening and playing music. I sometimes go to the music room in my dorm with some friends and play the guitar, piano, or sing. Instead of going to a party one weekend night, I played the guitar with a friend, and it was totally worth it.</p>

							</article>

							
						<!-- Blog -->
						<article id="blog">
							<h2 class="major">Blog</h2>
							
						</article>


					</div>

				<!-- Footer -->
					<footer id="footer">
						<p class="copyright">&copy; Lawrence Tang. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
					</footer>

			</div>

		<!-- BG -->
			<div id="bg"></div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>

	<script src="scripts/tsparticles-1.37.5/package/tsparticles.min.js"></script>
    <script type="text/javascript" src="scripts/scripts.js"></script>
</html>
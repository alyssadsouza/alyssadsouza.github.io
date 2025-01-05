---
id: "f1tenth"
title: "F1TENTH"
creationDate: "Oct 4, 2024"
tags: 
  - "ROS2"
repositoryUrl: "https://github.com/alyssadsouza/f1tenth"
videoUrl: "https://www.youtube.com/embed/vgEyvazwrU8?si=uu3IjJQqDvsKizU1"
thumbnailUrl: "https://f1tenth.readthedocs.io/en/stable/_images/basic_sim.gif"
description: "An autonomous racing competition focused on developing and testing racing algorithms, used to explore self-driving technologies in dynamic environments."
---

>**Note**: This page is a work in progress and is regularly updated.

## What is it?

[F1TENTH](https://roboracer.ai/index.html) is a platform for autonomous head to head racing, featuring 1/10th scale race cars designed to test and develop autonomous vehicle technologies. It combines real-time decision-making, sensor integration (e.g., LiDAR), and high-speed racing in a competitive environment, making it an ideal space for exploring autonomous systems and robotics.

For my fourth-year design project in school, my group and I are working towards contributing to the F1TENTH graduate design team at UW. We're currently taking a graduate-level [course from the F1TENTH website](https://roboracer.ai/learn.html) to build relevant skills like ROS 2, sensor data processing, and path planning. Our goal is to develop autonomous navigation algorithms that are both safe and competitive for the team's race car.


## F1TENTH Course

Below are updates on our group's progress in the F1TENTH course, where we've been working through various labs.

---

### [Lab 1](https://github.com/ShivamJ07/f1tenth_lab1): ROS 2 Setup and Simulation Configuration

**Key Concepts:** ROS 2 Basics, Docker Setup, F1TENTH Gym Environment

The first lab focused on setting up the development environment and configuring the F1TENTH simulation in ROS 2.

**Implementation Highlights:**

- Installed ROS 2 and configured Docker containers to run the F1TENTH gym.
- Set up the F1TENTH simulation workspace (`sim_ws`) and imported necessary packages.
- Verified communication between ROS 2 nodes, topics, and services.
- Tested simulation behavior with a sample driving node.

---

### [Lab 2](https://github.com/arohig/f1tenth_lab2): Automatic Emergency Braking (AEB)
**Key Concepts:** Safety, LiDAR Data, Instantaneous Time to Collision (iTTC)

In our second lab, we implemented an Automatic Emergency Braking (AEB) system to ensure collision avoidance based on LiDAR data. The primary focus was calculating Instantaneous Time to Collision (iTTC) metrics to predict potential collisions and react swiftly by stopping the car when obstacles were detected too close.

**Implementation Highlights:**

- Subscribed to LaserScan data from LiDAR sensors.
- Processed LiDAR ranges to identify minimum distances and calculate iTTC.
- Implemented a braking system that activates if iTTC falls below a predefined threshold.

**Simulator Demo:**

The screen recording below demonstrates our Automatic Emergency Braking (AEB) node running alongside the F1TENTH gym simulation. This setup allows us to simulate the car's motion and control it using keyboard commands.

With the AEB node active, it subscribes to the odometry topic, which provides updates on the car's position and velocity. It also publishes to the drive topic, which controls the car's velocity and steering angle.

When a potential collision is detected, the AEB node publishes a velocity of 0 to the drive topic, causing the car to stop. You will also notice the terminal logs warning messages to alert that a possible collision was detected.

<iframe
	title="Automatic Emergency Braking (AEB) Demo"
	src="https://drive.google.com/file/d/1BKnDBU_LopjavfuhpQ2tgZG1lShuLsvp/preview"
	allowFullScreen
></iframe>

---

### [Lab 3](https://github.com/alyssadsouza/f1tenth_lab3): Wall Following with PID Control
**Key Concepts:** Proportional-Integral-Derivative (PID) Control, Distance Estimation, Lateral Control

Wall following is fundamental for autonomous navigation, particularly in structured environments. We developed a system that dynamically adjusted the car's steering angle to maintain a fixed distance from the wall using PID control.

**Implementation Highlights:**

- Measured distances to the wall using LiDAR at specific angles.
- Calculated orientation error (alpha) based on relative angles to the wall.
- Implemented a PID controller to minimize error by adjusting steering angles.

**Control Logic:**

- **P (Proportional):** Immediate corrections based on error.
- **I (Integral):** Addressed bias over time (kept minimal here).
- **D (Derivative):** Smoothed out sharp changes to reduce oscillations.


**Simulator Demo:**

<iframe src="https://www.youtube.com/embed/nKNn8HgHUN4?start=67&amp;end=144" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


---

### [Lab 4](https://github.com/divyxnsh/f1tenth_lab4_template): Follow the Gap - Reactive Obstacle Avoidance
**Key Concepts:** Reactive Navigation, Gap Detection, Dynamic Path Planning

Lab 4 shifted the focus to obstacle avoidance using a reactive method called "Follow the Gap." Unlike Lab 3, which followed walls, this approach dynamically identifies and steers toward the largest open space in the car’s path.

**Algorithm Overview:**

1. **Preprocessing LiDAR Data:** Cleaned invalid values (e.g., NaN, Inf) and limited the range to ensure reliable inputs.
2. **Safety Bubble:** Marked points near obstacles as invalid, creating a buffer zone around them to enhance safety.
3. **Gap Detection:** Located the largest contiguous set of free space (non-zero ranges) in the LiDAR scan.
4. **Goal Selection:** Chose the best point within the gap—either the farthest or the most central point—to head toward.
5. **Steering and Speed Adjustment:** Calculated optimal steering angles and adjusted speeds dynamically based on turns and obstacles.

**Simulator Demo:**

<iframe src="https://www.youtube.com/embed/nKNn8HgHUN4?start=152&amp;end=231" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

This document will be updated as we complete the remaining labs, covering more advanced topics like map-based planning and optimization techniques.


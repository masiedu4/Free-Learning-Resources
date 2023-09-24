# freeresources.tech

Welcome to our free learning resource website! We are dedicated to providing a diverse collection of educational materials, tutorials, and resources for everyone in the tech community. Whether you are a beginner or an experienced professional, you'll find valuable content to enhance your skills and knowledge. This README file will guide you through the website's features and provide information on how you can contribute to making this platform even better.

## Table of Contents

Introduction
Features
Getting Started
Contributing
Code of Conduct
License

### Introduction

The platform is open source, meaning anyone can contribute, enhance, or modify the existing content to benefit the entire tech community.

### Features

- Vast Collection: Explore a wide range of topics, including programming languages, web development, data science, artificial intelligence, machine learning, cloud computing, and more.

- Search Functionality: Easily find the resources you need by using the search bar to discover specific content or topics of interest.

- Categorized Content: Content is organized into different categories, making it simple to browse through and locate resources relevant to your learning goals.

### Getting Started

To start using the website and benefiting from the vast collection of learning resources, simply visit [www.freeresources.tech](www.freeresources.tech) on your preferred web browser. The platform is open to everyone, and you don't need to create an account to access the content.

### Contributing Guide

#### Creating a Category

- Open `resources.ts` in the root directory
- To create a new category "[Category Name]" and add resources under it, use the following code snippet as a template:

```
{
  id: "devs",
  name: "Category Name",
  resources: [
    {
      title: "Resource 1 for Developers",
      tags: ["JavaScript", "React", "Next.js"],
      link: "www.fb.com"
    },
    // Add more resources for Developers
  ],
}

```

#### Adding a Resource

- Open `resources.js` in the root directory
- To add a new resources, use the following code snippet as a template and add it to the `resources` array:

```

    {
      title: "Resource 1 for Developers",
      tags: ["JavaScript", "React", "Next.js"],
      link: "www.fb.com"
    },


```

- **Please note that for each resource, you are allowed to submit a maximum of three(3) tags. Choose the most relevant and descriptive tags to help users find the resources they need easily**

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/). Feel free to use, modify, and distribute the code following the terms of the license.

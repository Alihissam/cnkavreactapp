import React from "react";

const DownloadsAndPlugins = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 mt-40">Downloads & Plugins</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Available Downloads</h2>
        <p className="text-lg mb-4">
          We offer a variety of downloads to enhance your experience. Below
          you’ll find links to our latest tools and resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Tool A",
              description: "A powerful tool for your needs.",
              link: "#",
              icon: "https://via.placeholder.com/50",
            },
            {
              name: "Tool B",
              description: "An amazing tool to boost productivity.",
              link: "#",
              icon: "https://via.placeholder.com/50",
            },
            {
              name: "Tool C",
              description: "Optimize your workflow with this tool.",
              link: "#",
              icon: "https://via.placeholder.com/50",
            },
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex items-center"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-md mb-2">{tool.description}</p>
                <a href={tool.link} className="text-blue-600 hover:underline">
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Plugins</h2>
        <p className="text-lg mb-4">
          Enhance your experience with our various plugins. Find the perfect
          plugin to extend the functionality of our platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Plugin X",
              description: "A useful plugin to integrate with other tools.",
              link: "#",
              icon: "https://via.placeholder.com/50",
            },
            {
              name: "Plugin Y",
              description: "Add extra features with this plugin.",
              link: "#",
              icon: "https://via.placeholder.com/50",
            },
            {
              name: "Plugin Z",
              description: "Enhance functionality with our latest plugin.",
              link: "#",
              icon: "https://via.placeholder.com/50",
            },
          ].map((plugin, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex items-center"
            >
              <img
                src={plugin.icon}
                alt={plugin.name}
                className="w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{plugin.name}</h3>
                <p className="text-md mb-2">{plugin.description}</p>
                <a href={plugin.link} className="text-blue-600 hover:underline">
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DownloadsAndPlugins;

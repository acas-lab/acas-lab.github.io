# Local Development Server for ACAS Lab Website

This document provides instructions on how to run and access the ACAS Lab website locally using `http-server`.

---

## Getting Started

To view the website on your local machine, you need to start a simple HTTP server. We recommend using `http-server` via `npx`.

### Prerequisites

* **Node.js and npm:** Ensure you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download them from [nodejs.org](https://nodejs.org/).

### Running the Server

1.  **Open your terminal or command prompt.**

2.  **Navigate to your website's root directory.** This is the folder containing your `index.html` file and other website assets (e.g., `assets`, `research`, `publications` folders).

    For example, if your website files are in a folder named `ACAS_Website` on your Desktop, you would use:
    ```bash
    cd ~/Desktop/ACAS_Website
    # Or, on Windows: cd C:\Users\YourUser\Desktop\ACAS_Website
    ```

3.  **Start the HTTP server.** In the terminal, run the following command:
    ```bash
    npx http-server -p 8000
    ```
    * `npx`: Executes the `http-server` package without needing to install it globally.
    * `http-server`: The command to start the web server.
    * `-p 8000`: Specifies that the server should listen on port `8000`. You can choose a different port if `8000` is already in use.

4.  **Verify the server is running.**
    You should see output in your terminal similar to this:
    ```
    Starting up http-server, serving ./
    Available on:
      [http://127.0.0.1:8000](http://127.0.0.1:8000)
      [http://192.168.1.](http://192.168.1.)X:8000 (your local network IP)

### Accessing the Website

Once the server is running, you can access the website in your web browser:

* **For the main page (Home):**
    Open your web browser and navigate to:
    `http://localhost:8000/index.html`

* **For specific research pages:**
    * **Processor Architecture:** `http://localhost:8000/processor-architecture.html`
    * **Memory Architecture:** `http://localhost:8000/memory-architecture.html`
    * **Accelerator System Design:** `http://localhost:8000/accelerator-system-design.html`
    *(Note: These paths assume your detailed research HTML files are in the root directory. Adjust if they are in a subfolder like `/research/`)*

---

### Stopping the Server

To stop the local server, go back to your terminal where `http-server` is running and press `Ctrl + C` (or `Cmd + C` on macOS).
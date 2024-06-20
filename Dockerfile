# # Use the official Cypress included image
# FROM cypress/included:13.12.0

# # Set working directory
# WORKDIR /e2e

# # Copy project files
# COPY . .

# # Install additional project dependencies if needed
# RUN npm install

# Add node_modules/.bin to PATH
# ENV PATH /e2e/node_modules/.bin:$PATH


# Run Cypress tests
# CMD ["cypress", "run"]

# Use the official Cypress image as the base image
FROM cypress/included:latest


# Install Firefox
RUN apt-get update && \
    apt-get install -y firefox-esr

# Set the DISPLAY environment variable
ENV DISPLAY=:99

# Add node_modules/.bin to PATH
ENV PATH /e2e/node_modules/.bin:$PATH

# Set the working directory
WORKDIR /app



# Copy package.json and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm install


# Copy the rest of the application code
COPY . .


# Verify Cypress and Firefox installation
RUN npx cypress verify


# Command to run tests
CMD ["npx", "cypress", "run", "--browser", "firefox"]



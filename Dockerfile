
# Use the official Cypress image as the base image
FROM cypress/included:latest



# Install Firefox
RUN apt-get update && \
    apt-get install -y firefox-esr
RUN apt-get install -y libgtk-3-0

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





# # Use the official Cypress base image
# FROM cypress/included:latest
# RUN apt-get update
# RUN apt-get install -y firefox-esr
# RUN apt-get install -y libgtk-3-0


# # Set the DISPLAY environment variable
# ENV DISPLAY=:99

# # Add node_modules/.bin to PATH
# ENV PATH /e2e/node_modules/.bin:$PATH

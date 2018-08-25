This is a weather app.

So far, this app only works on the command line, this is where I am testing out the functionality.

To use:
  1. Download the files and node_modules
  2. In the command line type [node app.js] (once inside the directory)
  3. After typing [node app.js], follow it by typing [ -a], this tells the command line you want the longitude and   latitude for a certain location.
  4. Following the [node app.js -a], type an address in quotation marks. It could be zip code, or street address.
  5. Once you type [node app.js -a "<your address>"], press enter. The command line will give you the address you typed, longitude and latitude for that location.
  Ex) [node app.js -a "00000"]

  What the app does is take the location the user puts in and fetches the weather info on that location. It provides the temperature and apparent temperature.

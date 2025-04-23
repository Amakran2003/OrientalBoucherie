#!/bin/bash

function continue_iteration() {
  while true; do
    read -p "Continue to iterate? (y/n): " response
    case $response in
      [Yy]* ) return 0;;  # Continue
      [Nn]* ) return 1;;  # Stop
      * ) echo "Please answer y or n.";;
    esac
  done
}

# Example usage:
counter=1
while true; do
  echo "Iteration $counter"
  
  # Do some work here
  
  if continue_iteration; then
    ((counter++))
  else
    echo "Exiting iteration loop"
    break
  fi
done

echo "Script completed"

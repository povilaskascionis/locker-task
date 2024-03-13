# NordLocker take-home task

## Installation

To run local development version run:

```bash
  yarn && yarn start
```

To check out production build:

```bash
  docker build -t locker
  docker run -p <your_local_port>:3000 locker
```

Then open `localhost:<your_local_port>`

### Implementation notes

Decided against using any form library as validation and overall complexity is minimal. `react-hook-form` would have been my choice otherwise

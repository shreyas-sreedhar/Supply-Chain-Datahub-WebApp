# Supply Chain Data hub Assignment - Frontend

    This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


## Installation

1. **Clone the repository**:
   ```
   git clone <[github.com/shreyas-sreedhar/SCDH-FSD](https://github.com/shreyas-sreedhar/SCDH-FSD)>
   cd <SCDH-FSD/frontend>
   ```

2. **Install packages**:
   ```
   npm i 
   ```

3. **Running the Application**:
   ```
   npm run dev
   ```

4. **Test the App**:
   ```npm run test:watch"
   ```


5. **Access the application**:
   - Open your browser and go to `http://localhost:3000`
   - API documentation available at `http://localhost:3000/docs`

## Endpoints

### Root

**URL**: `/`

-Lists the companies


**URL**: `/companies`


- **Summary**: Redirects back to `/`


**URL**: `/companies/{company_id}`


- **Summary**: Lists the companies under that company with a map3d and location details of it. 


### Prerequisites

- Node.js and npm (or yarn) installed on your system.
- Docker installed and running.

from flask import Flask, jsonify, Response
from flask_cors import CORS
from matplotlib import pyplot as plt
import numpy as np
import io
import base64
import pandas as pd
from data import get_parsed_df


# Set the Agg backend
import matplotlib
matplotlib.use('Agg')

# Generate plot
def create_plot():
    # Create data
    x = np.linspace(0, 20, 100)
    y = np.sin(x)
  
    # Plot
    plt.plot(x, y)
    plt.title('Sine Wave')
    plt.xlabel('x')
    plt.ylabel('y')
    plt.grid(True)

# App instance
app = Flask(__name__)
CORS(app)

def plot_to_img():
    # Create plot
    create_plot()
  
    # Save plot to a BytesIO object
    img = io.BytesIO()
    plt.savefig(img, format='png')
    return img.getvalue()


# /api/plot
@app.route("/api/plot", methods=['GET'])
def plot():
    img = plot_to_img()
    img_b64 = base64.b64encode(img).decode('utf-8')
    
    parsed_df = get_parsed_df()
    df_json = parsed_df.to_json(orient='records')  # Convert DataFrame to JSON
    
    return {'image': img_b64, 'dataframe': df_json}

if __name__ == "__main__":
    app.run(debug=True, port=8080)
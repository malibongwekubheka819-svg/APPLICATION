# Chef's Menu Manager

## Overview
**Chef's Menu Manager** is a cross-platform mobile and web application built using **React Native** and **Expo**. It allows professional chefs and kitchen managers to effortlessly capture, validate, and manage restaurant menu items in real time.

---

## Features & Rubric Mapping

### 1. User Interface (UI)
* **Clear Application Title:** Features a prominent header (`Chef's Menu Manager`) with descriptive subtitle text.
* **Modern Components:** Built using core React Native components such as `SafeAreaView`, `ScrollView`, `KeyboardAvoidingView`, `TextInput`, `TouchableOpacity`, and `FlatList`.
* **Consistent Layout & Styling:** Designed with clean card layouts, professional color branding, and structured padding/margins for optimal readability.

### 2. Menu Information Capture
* Allows entry for all essential menu details:
  * **Dish Name**
  * **Description**
  * **Course** (e.g., Starter, Main Course, Dessert)
  * **Price** (Numeric entry)

### 3. Dynamic Menu Display
* Supports adding multiple menu items dynamically.
* Renders the complete collection of added dishes instantly using a responsive `FlatList`.
* Automatically updates the display list in real time whenever a new item is submitted.

### 4. User Experience (UX) & Validation
* **Field Validation:** Prevents submission if any required field is left blank.
* **Price Validation:** Ensures that the entered price is a valid, positive numeric value.
* **Error Feedback:** Displays a distinct warning box with descriptive error text if validation fails.
* **Success Confirmation:** Renders a success alert box when a dish is successfully added to the menu.
* **Empty State Handling:** Displays a dedicated placeholder message and container when no menu items have been added yet.

├── assets/                # App icons and images
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation

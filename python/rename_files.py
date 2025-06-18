import os
import sys

def rename_files_in_directory(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.webm'):
            parts = filename[:-5].split('-')  # Remove '.webm' and split by '-'
            if len(parts) == 3:
                char, type_, move = parts
                type_upper = type_.upper()
                new_name = f"{char}_{move}_{type_upper}_0.webm"
                old_path = os.path.join(directory, filename)
                new_path = os.path.join(directory, new_name)
                os.rename(old_path, new_path)
                print(f"Renamed: {filename} -> {new_name}")
            if len(parts) == 4:
                char, type_, move, number = parts
                type_upper = type_.upper()
                if number.isdigit():
                    new_name = f"{char}_{move}_{type_upper}_{int(number)-1}.webm"
                else:
                    new_name = f"{char}_{move}_{type_upper}_{number}.webm"
                old_path = os.path.join(directory, filename)
                new_path = os.path.join(directory, new_name)
                os.rename(old_path, new_path)
                print(f"Renamed: {filename} -> {new_name}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python rename_files.py <directory>")
        sys.exit(1)
    directory = sys.argv[1]
    rename_files_in_directory(directory)
